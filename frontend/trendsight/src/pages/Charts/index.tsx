import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import Highstock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './StockChart.css'; // Custom CSS file for styling

const StockChart: React.FC = () => {
    const [options, setOptions] = useState<Highcharts.Options | null>(null);
    const [seriesData, setSeriesData] = useState<Highcharts.SeriesOptionsType[]>([]);
    const [selectedStock, setSelectedStock] = useState<string>('GOOGL');

    // Alpha Vantage API key
    const API_KEY = 'BE19IFDXPS7QAV48';

    // List of available stock symbols for comparison
    const stockList = [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' },
        { symbol: 'MSFT', name: 'Microsoft Corporation' },
        { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
        { symbol: 'TSLA', name: 'Tesla, Inc.' },
        { symbol: 'NVDA', name: 'NVIDIA Corporation' },
        { symbol: 'META', name: 'Meta Platforms, Inc.' },  // Facebook
        { symbol: 'NFLX', name: 'Netflix, Inc.' },
        { symbol: 'ADBE', name: 'Adobe Inc.' },
        { symbol: 'INTC', name: 'Intel Corporation' }
    ];

    // Helper function to format data
    const formatData = (data: any) => {
        const ohlc = Object.keys(data['Time Series (Daily)']).map(date => {
            const timestamp = new Date(date).getTime();
            const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
            return [timestamp, closePrice];
        }).reverse();

        const volume = Object.keys(data['Time Series (Daily)']).map(date => {
            const timestamp = new Date(date).getTime();
            const volumeData = parseFloat(data['Time Series (Daily)'][date]['5. volume']);
            return [timestamp, volumeData];
        }).reverse();

        return { ohlc, volume };
    };

    const fetchData = async (symbol: string, name: string, color: string) => {
        try {
            console.log(`Fetching data for ${name} (${symbol})...`);

            const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Raw API Data:', data);

            if (data['Time Series (Daily)']) {
                const { ohlc, volume } = formatData(data);
                console.log('Formatted OHLC Data:', ohlc);
                console.log('Formatted Volume Data:', volume);

                return {
                    line: {
                        type: 'line',
                        name,
                        data: ohlc,
                        color,
                        marker: { enabled: true }
                    },
                    volume: {
                        type: 'column',
                        name: `${name} Volume`,
                        data: volume,
                        yAxis: 1,
                        color
                    }
                };
            } else {
                console.error("API did not return the expected data structure:", data);
                return null;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    useEffect(() => {
        const initializeChart = async () => {
            const initialSeries = await fetchData('AAPL', 'Apple Inc.', '#007acc');
            if (initialSeries) {
                setSeriesData([initialSeries.line, initialSeries.volume]);
                setOptions({
                    title: { text: 'Stock Price and Volume Comparison' },
                    yAxis: [{
                        labels: { align: 'right', x: -3 },
                        title: { text: 'Price' },
                        height: '60%',
                        lineWidth: 2,
                        resize: { enabled: true }
                    }, {
                        labels: { align: 'right', x: -3 },
                        title: { text: 'Volume' },
                        top: '65%',
                        height: '35%',
                        offset: 0,
                        lineWidth: 2
                    }],
                    series: [initialSeries.line, initialSeries.volume]
                });
            } else {
                console.error('Failed to initialize chart with initial data.');
            }
        };
        initializeChart();
    }, []);

    const addStock = async () => {
        const selectedStockItem = stockList.find(stock => stock.symbol === selectedStock);
        if (!selectedStockItem) {
            console.error('Selected stock not found in the list.');
            return;
        }

        const newSeries = await fetchData(
            selectedStockItem.symbol,
            selectedStockItem.name,
            `#${Math.floor(Math.random() * 16777215).toString(16)}`  // Random color
        );

        if (newSeries) {
            setSeriesData([...seriesData, newSeries.line, newSeries.volume]);
        } else {
            console.error('Failed to add new stock.');
        }
    };

    const removeStock = (index: number) => {
        setSeriesData(seriesData.filter((_, i) => i !== index && i !== index + 1));
    };

    const handleColorChange = (index: number, color: string) => {
        const updatedSeriesData = [...seriesData];
        (updatedSeriesData[index] as Highcharts.SeriesLineOptions).color = color;
        setSeriesData(updatedSeriesData);
    };

    return (
        <div className="stock-chart-container">
            <div className="chart-container">
                {options ? (
                    <HighchartsReact
                        highcharts={Highstock}
                        constructorType="stockChart"
                        options={{
                            ...options,
                            series: seriesData,
                            rangeSelector: {
                                selected: 1,  // Select the range you want by default, e.g., 1 month
                                buttons: [{
                                    type: 'day',
                                    count: 5,
                                    text: '5d'
                                }, {
                                    type: 'month',
                                    count: 1,
                                    text: '1m'
                                }, {
                                    type: 'month',
                                    count: 3,
                                    text: '3m'
                                }, {
                                    type: 'year',
                                    count: 1,
                                    text: '1y'
                                }, {
                                    type: 'all',
                                    text: 'All'
                                }]
                            }
                        }}
                        containerProps={{ style: { height: '500px', width: '100%' } }}
                    />
                ) : (
                    <p>Loading chart...</p>
                )}
            </div>
            <div className="controls-container">
                <select
                    value={selectedStock}
                    onChange={(e) => setSelectedStock(e.target.value)}
                    className="stock-select"
                >
                    {stockList.map((stock) => (
                        <option key={stock.symbol} value={stock.symbol}>
                            {stock.name} ({stock.symbol})
                        </option>
                    ))}
                </select>
                <button onClick={addStock} className="add-button">Add Stock</button>
                <div className="stock-controls">
                    {seriesData.filter((_, i) => i % 2 === 0).map((series, index) => (
                        <div key={index} className="stock-control">
                            <span>{series.name}</span>
                            <input
                                type="color"
                                value={(series as Highcharts.SeriesLineOptions).color}
                                onChange={(e) => handleColorChange(index * 2, e.target.value)}
                                className="color-picker"
                            />
                            <button onClick={() => removeStock(index * 2)} className="remove-button">Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StockChart;
