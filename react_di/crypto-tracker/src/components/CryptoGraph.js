import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom'
import { Line, defaults } from 'react-chartjs-2'
import {
    Container,
    ContainerBox,
    Chart
} from './CryptoGraphElements';
import moment from 'moment';

defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'top'

const _dataInfo = {
    labels: [],
    datasets: [
        {
            label: '',
            data: []
        }
    ]
};

const CryptoGraph = ({ match: { params: { id } } }) => {

    const match = useRouteMatch();

    const [date, setDate] = useState([])
    const [price, setPrice] = useState([])
    const [logo, setLogo] = useState('');
    const [title, setTitle] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');
    const [lastPrice, setLastPrice] = useState(0);

    const [chartData, setChartData] = useState(_dataInfo);

    const getCoinInfo = () => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`;
        axios.get(url).then(res => {
            const { data: { prices } } = res;
            const newPrices = prices.map(item => ({ date: item[0], price: item[1]}));
            const _info = {
                ...chartData,
                labels: newPrices.map(item => moment(item.date).format('YY/MM/DD')),
                datasets: [
                    {
                        label: 'price',
                        data: newPrices.map((item) => item.price),
                    }
                ]
            };
            setChartData(_info);
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getCoinInfo();
    }, [id]);

    // useEffect(() => {

    //     axios
    //         .get(
    //             `https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false`
    //         )
    //         .then(res => {
    //             const data = res.data
    //             console.log(data)
    //             // console.log(data.market_cap_rank)
    //             setLogo(data.image.small)
    //             setTitle(data)
    //             setUpdatedDate(data)
    //             setLastPrice(data.tickers[0].last)

    //         })
    //         .catch(error => console.log(error));

    // }, []);


    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=90&interval=daily`
    //         )
    //         .then(res => {
    //             const data = res.data.prices
    //             console.log(`${match.params.id}`, data);
    //             for (var key in data) {
    //                 const yvalue = data[key][1].toFixed(4)
    //                 const xvalue = new Date(data[key][0]).toLocaleDateString()
    //                 date.push(xvalue)
    //                 price.push(yvalue)
    //             }
    //             setDate(date)
    //             setPrice(price)


    //         })
    //         .catch(error => console.log(error));

    // }, [date, price]);

    const handleChange = e => {


    };

    const options = {
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [
                {
                    position: 'right',
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
        legend: {
            display: false,
            labels: {
                fontSize: 10,
            },
        },
    }

    return (
        <Container>
            <ContainerBox>
                <img src={logo} />
                <h1>{title.name}</h1>
                <p>{updatedDate.last_updated}</p>
                <p>{lastPrice}</p>

                <label > Save to My Cryptos</label>
                <input
                    onChange={handleChange}
                    type="checkbox"
                    name=""
                    value={match.params.id}

                />


                <Chart>
                    <Line
                        data={chartData}
                        height={100}
                        width={370}
                        options={options}
                    />
                </Chart>

            </ContainerBox>

        </Container >
    )
}

export default CryptoGraph





// 1. ��ܿ��� ���� ����Ʈ�� ����� �ȴ�.
// 	- ��ܿ��� ������ �޾ƿͼ� ����: axios�� �ҷ��´�.
// 2. ���θ���Ʈ�� Ŭ���ϸ� �ش� ���ο� ���� ��Ʈ�� ��µȴ�.
// 3. ���� ����Ʈ�� Ŭ���� �� url�� �ٲ��.
// 	- Ŭ���� url�� �ٲ�Ƿ� /:id, App���� ���� �̸��� ������ ������ش�.
// 4. url�� """�ٲ� ������""" ��Ʈ�� �ٲ��.
// 	- useEffect����Ѵ�. �ۿ� ���� => url, 
// 	- useEffect�� ������ ������ ���ο� �����͸� �ҷ��� chart�� ����ش�.