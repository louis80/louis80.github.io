import React from 'react';
import { Menu, Button} from 'antd';
import { Link } from "react-router-dom";
import Icon from '@ant-design/icons';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileTextOutlined
} from '@ant-design/icons';

import { createFromIconfontCN } from '@ant-design/icons';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
      '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
  });

const ReactSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M836.8 353.6c-11.2-3.2-20.8-6.4-32-9.6 1.6-8 3.2-14.4 4.8-22.4 24-118.4 8-214.4-46.4-246.4-52.8-30.4-139.2 1.6-225.6 76.8-8 8-17.6 14.4-25.6 22.4-4.8-4.8-11.2-9.6-16-16-91.2-81.6-182.4-115.2-236.8-83.2-52.8 30.4-68.8 120-46.4 233.6 1.6 11.2 4.8 22.4 8 33.6-12.8 3.2-25.6 8-36.8 11.2C76.8 392 0 451.2 0 510.4c0 62.4 81.6 124.8 192 163.2 9.6 3.2 17.6 6.4 27.2 8-3.2 12.8-6.4 24-8 36.8-20.8 110.4-4.8 198.4 48 228.8 54.4 32 145.6 0 233.6-78.4 6.4-6.4 14.4-12.8 20.8-19.2 8 8 17.6 16 27.2 24 84.8 73.6 169.6 104 222.4 73.6 54.4-32 72-126.4 48-241.6-1.6-8-3.2-17.6-6.4-27.2 6.4-1.6 12.8-3.2 19.2-6.4C940.8 636.8 1024 574.4 1024 510.4c0-59.2-78.4-118.4-187.2-156.8zM566.4 184c75.2-65.6 144-89.6 176-72 33.6 19.2 46.4 97.6 25.6 201.6-1.6 6.4-3.2 12.8-4.8 20.8-44.8-9.6-89.6-17.6-134.4-20.8-25.6-36.8-54.4-73.6-84.8-105.6 6.4-9.6 14.4-16 22.4-24zM334.4 614.4c9.6 17.6 20.8 35.2 32 51.2-32-3.2-62.4-8-92.8-14.4 8-28.8 19.2-59.2 32-89.6 9.6 19.2 19.2 36.8 28.8 52.8z m-60.8-240c28.8-6.4 59.2-11.2 91.2-16-11.2 16-20.8 33.6-30.4 51.2-9.6 17.6-19.2 33.6-28.8 52.8-12.8-30.4-22.4-59.2-32-88z m54.4 137.6c12.8-27.2 27.2-54.4 43.2-81.6s32-52.8 48-78.4c30.4-1.6 60.8-3.2 91.2-3.2s62.4 1.6 91.2 3.2c17.6 25.6 33.6 51.2 48 76.8s30.4 52.8 43.2 81.6c-12.8 27.2-27.2 54.4-43.2 81.6-16 27.2-32 52.8-48 78.4-30.4 1.6-60.8 3.2-92.8 3.2s-62.4-1.6-91.2-3.2C400 644.8 384 619.2 368 592s-25.6-52.8-40-80z m361.6 102.4l28.8-52.8c12.8 28.8 24 59.2 33.6 88-30.4 6.4-62.4 12.8-94.4 16 11.2-16 22.4-33.6 32-51.2z m28.8-153.6l-28.8-52.8c-9.6-17.6-20.8-33.6-30.4-49.6 32 4.8 62.4 9.6 91.2 16-8 30.4-19.2 59.2-32 86.4zM512 236.8c20.8 22.4 40 46.4 59.2 72-40-1.6-80-1.6-118.4 0 19.2-27.2 40-51.2 59.2-72zM280 113.6c33.6-19.2 108.8 8 187.2 78.4 4.8 4.8 9.6 9.6 16 14.4-30.4 33.6-59.2 68.8-86.4 105.6-44.8 4.8-89.6 11.2-134.4 20.8-3.2-9.6-4.8-20.8-6.4-30.4-19.2-97.6-6.4-169.6 24-188.8z m-48 528c-8-3.2-16-4.8-25.6-8-43.2-12.8-91.2-35.2-126.4-62.4-20.8-14.4-33.6-35.2-38.4-59.2 0-36.8 64-83.2 155.2-115.2 11.2-4.8 22.4-8 35.2-11.2 14.4 43.2 30.4 86.4 49.6 128-19.2 40-36.8 83.2-49.6 128zM464 836.8c-33.6 30.4-72 54.4-113.6 70.4-22.4 11.2-48 11.2-70.4 3.2-32-19.2-44.8-89.6-27.2-184 1.6-11.2 4.8-22.4 8-33.6 44.8 9.6 89.6 16 136 19.2 25.6 36.8 56 73.6 86.4 107.2-6.4 6.4-12.8 12.8-19.2 17.6z m49.6-48c-20.8-22.4-40-46.4-60.8-72 19.2 0 38.4 1.6 59.2 1.6 20.8 0 41.6 0 60.8-1.6-19.2 24-38.4 48-59.2 72zM774.4 848c-1.6 24-14.4 48-33.6 62.4-32 19.2-99.2-4.8-172.8-68.8-8-8-16-14.4-25.6-22.4 30.4-33.6 59.2-68.8 84.8-107.2 46.4-3.2 91.2-11.2 136-20.8l4.8 24c11.2 43.2 12.8 89.6 6.4 132.8z m36.8-214.4c-4.8 1.6-11.2 3.2-17.6 4.8-14.4-43.2-32-86.4-51.2-128 19.2-40 35.2-83.2 49.6-126.4 11.2 3.2 20.8 6.4 30.4 9.6 92.8 32 158.4 80 158.4 116.8 0 40-68.8 89.6-169.6 123.2zM512 603.2c51.2 0 91.2-41.6 91.2-91.2s-41.6-91.2-91.2-91.2-91.2 41.6-91.2 91.2 40 91.2 91.2 91.2z"/>
    </svg>
);
const ReactSvgIcon = props => <Icon component={ReactSvg} {...props} />;

const Postgres = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024"> <path d="M730.794667 0a432.384 432.384 0 0 0-117.546667 17.194667l-2.688 0.853333A466.005333 466.005333 0 0 0 537.6 11.008C487.338667 10.154667 444.16 22.357333 409.344 42.666667 375.04 30.762667 303.872 10.24 228.864 14.336 176.64 17.194667 119.637333 33.066667 77.397333 77.653333 35.285333 122.24 13.013333 191.232 17.706667 285.098667c1.28 25.898667 8.661333 68.138667 20.906666 122.837333s29.44 118.741333 50.901334 177.152c21.461333 58.453333 44.970667 110.933333 81.706666 146.602667 18.346667 17.877333 43.605333 32.896 73.386667 31.658666 20.906667-0.853333 39.808-10.026667 56.106667-23.552 7.936 10.453333 16.426667 15.018667 24.149333 19.242667 9.728 5.333333 19.2 8.96 29.013333 11.349333 17.621333 4.394667 47.786667 10.282667 83.114667 4.266667 12.032-2.005333 24.704-5.930667 37.333333-11.52 0.469333 14.08 1.024 27.861333 1.578667 41.813333 1.749333 44.202667 2.858667 85.034667 16.128 120.832 2.133333 5.845333 7.978667 35.968 31.018667 62.549334 23.04 26.624 68.181333 43.221333 119.594666 32.213333 36.266667-7.765333 82.389333-21.76 113.024-65.365333 30.293333-43.093333 43.946667-104.917333 46.634667-205.184a201.813333 201.813333 0 0 1 2.346667-14.336l7.210666 0.64h0.853334c38.698667 1.749333 80.682667-3.754667 115.754666-20.053334 31.061333-14.378667 54.570667-28.928 71.68-54.741333 4.266667-6.4 8.96-14.122667 10.24-27.434667s-6.357333-34.133333-19.029333-43.733333c-25.386667-19.285333-41.344-11.946667-58.453333-8.405333a267.52 267.52 0 0 1-51.285334 6.229333c49.322667-83.072 84.693333-171.306667 104.874667-249.386667 11.946667-46.08 18.645333-88.576 19.2-125.738666 0.554667-37.162667-2.474667-70.058667-24.746667-98.517334C911.36 25.6 813.525333 1.024 737.834667 0.170667c-2.346667-0.042667-4.693333-0.085333-7.04-0.042667z m-2.005334 27.306667c71.594667-0.682667 163.072 19.413333 228.736 103.338666 14.762667 18.858667 19.157333 46.421333 18.645334 80.384-0.554667 33.92-6.826667 74.538667-18.304 119.04-22.272 86.186667-64.341333 186.666667-123.605334 276.821334a32.256 32.256 0 0 0 6.741334 3.669333c12.373333 5.12 40.576 9.514667 96.853333-2.048 14.165333-2.986667 24.533333-4.992 35.285333 3.2a22.186667 22.186667 0 0 1 7.808 18.133333 30.037333 30.037333 0 0 1-5.546666 14.336c-10.88 16.341333-32.341333 31.829333-59.861334 44.586667-24.362667 11.349333-59.306667 17.28-90.282666 17.621333-15.530667 0.170667-29.866667-1.024-42.026667-4.821333l-0.768-0.298667c-4.693333 45.226667-15.488 134.528-22.528 175.274667-5.632 32.853333-15.488 58.965333-34.304 78.506667-18.773333 19.541333-45.354667 31.317333-81.109333 38.997333-44.288 9.514667-76.586667-0.725333-97.408-18.261333-20.778667-17.493333-30.293333-40.704-36.010667-54.912-3.925333-9.813333-5.973333-22.528-7.936-39.509334-1.962667-16.981333-3.413333-37.76-4.394667-61.184a2194.176 2194.176 0 0 1-1.28-107.648 130.602667 130.602667 0 0 1-66.218666 32.426667c-29.397333 4.992-55.637333 0.085333-71.296-3.84a97.109333 97.109333 0 0 1-22.186667-8.576c-7.253333-3.882667-14.165333-8.277333-18.773333-16.938667a23.893333 23.893333 0 0 1-2.432-16.256 26.026667 26.026667 0 0 1 9.301333-14.122666c8.448-6.869333 19.626667-10.709333 36.48-14.208 30.677333-6.314667 41.386667-10.624 47.914667-15.786667 5.546667-4.437333 11.818667-13.397333 22.912-26.538667a49.493333 49.493333 0 0 1-0.128-1.749333 126.293333 126.293333 0 0 1-56.746667-15.274667c-6.4 6.741333-39.082667 41.301333-78.933333 89.258667-16.768 20.053333-35.285333 31.573333-54.826667 32.384-19.541333 0.853333-37.205333-9.002667-52.224-23.552-29.994667-29.141333-53.930667-79.274667-74.794667-135.936-20.821333-56.661333-37.76-119.765333-49.792-173.525333-12.074667-53.76-19.2-97.109333-20.224-118.016-4.48-88.832 16.298667-148.693333 51.925334-186.453334 35.669333-37.76 84.565333-52.053333 132.224-54.784 85.546667-4.906667 166.784 24.917333 183.210666 31.317334 31.658667-21.504 72.448-34.901333 123.392-34.048a315.306667 315.306667 0 0 1 71.722667 9.301333l0.853333-0.384a292.437333 292.437333 0 0 1 31.530667-9.130667A410.709333 410.709333 0 0 1 728.746667 27.392z m6.485334 28.586666h-6.229334a372.906667 372.906667 0 0 0-72.704 8.192c53.162667 23.552 93.312 59.818667 121.6 96a360.106667 360.106667 0 0 1 48.298667 81.92c4.693333 11.264 7.850667 20.778667 9.642667 28.16 0.896 3.712 1.493333 6.826667 1.706666 10.069334a18.773333 18.773333 0 0 1-0.512 6.144c0 0.128-0.213333 0.426667-0.256 0.554666 1.28 37.376-7.978667 62.72-9.088 98.389334-0.853333 25.856 5.76 56.234667 7.381334 89.386666 1.536 31.146667-2.218667 65.365333-22.442667 98.944 1.706667 2.048 3.242667 4.096 4.864 6.144 53.504-84.266667 92.074667-177.493333 112.64-256.981333 11.008-42.794667 16.853333-81.578667 17.365333-112.298667 0.426667-30.72-5.290667-52.992-12.586666-62.293333-57.258667-73.216-134.741333-91.861333-199.68-92.373333z m-204.373334 10.922667c-50.432 0.128-86.613333 15.36-114.048 38.186667-28.288 23.594667-47.274667 55.893333-59.733333 88.96-14.805333 39.253333-19.882667 77.226667-21.888 102.997333l0.554667-0.341333c15.232-8.533333 35.242667-17.066667 56.661333-22.016 21.418667-4.906667 44.501333-6.442667 65.408 1.664s38.186667 27.178667 44.458667 56.106666c30.037333 138.965333-9.344 190.634667-23.850667 229.632a410.026667 410.026667 0 0 0-14.122667 43.221334c1.834667-0.426667 3.669333-0.938667 5.504-1.109334 10.24-0.853333 18.261333 2.56 23.04 4.608 14.592 6.058667 24.618667 18.773333 30.037334 33.28 1.408 3.797333 2.432 7.893333 3.029333 12.117334a14.336 14.336 0 0 1 0.853333 5.418666 2352.64 2352.64 0 0 0 0.554667 159.488c0.981333 22.954667 2.432 43.178667 4.266667 59.136 1.834667 15.914667 4.437333 28.032 6.101333 32.128 5.461333 13.653333 13.44 31.530667 27.861333 43.690667 14.421333 12.117333 35.114667 20.224 72.917334 12.117333 32.768-7.04 52.992-16.810667 66.517333-30.848 13.482667-14.037333 21.546667-33.578667 26.709333-63.488 7.722667-44.8 23.253333-174.72 25.130667-199.168-0.853333-18.432 1.877333-32.597333 7.765333-43.392 6.058667-11.093333 15.445333-17.877333 23.552-21.546666 4.053333-1.834667 7.850667-3.072 10.965334-3.968a254.122667 254.122667 0 0 0-10.368-13.866667 190.122667 190.122667 0 0 1-28.416-46.890667 353.962667 353.962667 0 0 0-10.965334-20.608c-5.674667-10.24-12.842667-23.04-20.352-37.418666-15.018667-28.8-31.36-63.701333-39.850666-97.706667-8.448-33.962667-9.685333-69.12 11.989333-93.909333 19.2-22.016 52.906667-31.146667 103.509333-26.026667-1.493333-4.48-2.389333-8.192-4.906666-14.165333a333.525333 333.525333 0 0 0-44.416-75.264c-42.88-54.826667-112.298667-109.184-219.562667-110.933334h-4.906667z m-283.392 2.218667c-5.418667 0-10.837333 0.170667-16.213333 0.469333-43.093333 2.474667-83.84 14.976-112.981333 45.866667-29.184 30.890667-48.384 81.536-44.202667 165.376 0.810667 15.872 7.722667 60.330667 19.584 113.152 11.818667 52.821333 28.586667 114.986667 48.725333 169.898666 20.181333 54.912 44.629333 102.698667 67.84 125.312 11.690667 11.306667 21.845333 15.872 31.061334 15.488 9.258667-0.426667 20.394667-5.76 34.005333-22.101333a1845.077333 1845.077333 0 0 1 77.226667-87.381333 149.205333 149.205333 0 0 1-49.792-134.4c4.394667-31.530667 4.992-61.013333 4.48-84.309334-0.512-22.698667-2.133333-37.802667-2.133334-47.232a14.336 14.336 0 0 1 0-0.810666v-0.213334l-0.042666-0.256v-0.042666a422.101333 422.101333 0 0 1 25.258666-144.042667c11.946667-31.744 29.738667-64 56.405334-90.112-26.197333-8.618667-72.704-21.76-123.050667-24.234667a324.394667 324.394667 0 0 0-16.213333-0.426666zM776.490667 294.4c-28.970667 0.384-45.226667 7.850667-53.76 17.621333-12.074667 13.866667-13.226667 38.186667-5.717334 68.138667 7.466667 29.994667 22.912 63.530667 37.418667 91.392 7.253333 13.952 14.293333 26.496 19.968 36.693333 5.717333 10.24 9.898667 17.493333 12.458667 23.68 2.346667 5.717333 4.949333 10.752 7.594666 15.445334 11.221333-23.68 13.226667-46.933333 12.074667-71.168-1.493333-29.994667-8.448-60.672-7.424-91.733334 1.152-36.309333 8.32-59.946667 8.96-88.021333a247.168 247.168 0 0 0-31.573333-2.048z m-351.317334 4.906667a120.32 120.32 0 0 0-26.282666 3.157333 199.04 199.04 0 0 0-49.194667 19.157333 103.125333 103.125333 0 0 0-14.890667 9.728l-0.938666 0.853334c0.256 6.229333 1.493333 21.333333 2.005333 43.562666 0.512 24.32-0.085333 55.338667-4.778667 88.917334-10.197333 72.96 42.752 133.376 104.96 133.461333 3.626667-14.976 9.6-30.165333 15.573334-46.165333 17.322667-46.677333 51.413333-80.725333 22.698666-213.589334-4.693333-21.76-13.994667-30.549333-26.794666-35.498666a62.890667 62.890667 0 0 0-22.357334-3.584z m337.792 8.704h2.133334a37.461333 37.461333 0 0 1 7.68 0.938666c2.304 0.512 4.266667 1.28 5.888 2.346667a6.997333 6.997333 0 0 1 3.2 4.693333l-0.042667 0.341334h0.042667-0.042667a10.24 10.24 0 0 1-1.493333 5.76 28.501333 28.501333 0 0 1-4.693334 6.4 28.885333 28.885333 0 0 1-16.469333 9.045333 25.173333 25.173333 0 0 1-17.493333-4.394667 25.941333 25.941333 0 0 1-5.546667-5.034666 11.093333 11.093333 0 0 1-2.688-5.418667 7.253333 7.253333 0 0 1 1.792-5.461333 16.384 16.384 0 0 1 4.992-3.84c4.096-2.304 9.642667-4.010667 15.914667-4.949334 2.346667-0.341333 4.650667-0.512 6.826666-0.554666z m-333.653333 7.168c2.261333 0 4.650667 0.213333 7.082667 0.554666 6.528 0.896 12.330667 2.645333 16.768 5.205334a19.029333 19.029333 0 0 1 5.674666 4.522666 9.514667 9.514667 0 0 1 2.304 7.253334 12.885333 12.885333 0 0 1-3.2 6.570666 27.690667 27.690667 0 0 1-6.101333 5.546667 27.306667 27.306667 0 0 1-19.114667 4.821333 31.061333 31.061333 0 0 1-17.92-9.728 30.293333 30.293333 0 0 1-5.034666-6.997333 11.946667 11.946667 0 0 1-1.749334-7.552c0.64-4.608 4.437333-6.997333 8.149334-8.32a36.949333 36.949333 0 0 1 13.098666-1.706667z m386.56 313.301333l-0.128 0.042667c-6.272 2.261333-11.434667 3.2-15.786667 5.12a19.285333 19.285333 0 0 0-10.197333 9.130666c-2.688 4.906667-4.992 13.610667-4.309333 28.416a21.76 21.76 0 0 0 6.314666 2.986667c7.296 2.218667 19.541333 3.669333 33.194667 3.456 27.221333-0.298667 60.714667-6.656 78.506667-14.933333a168.533333 168.533333 0 0 0 40.234666-26.24h-0.042666c-59.434667 12.288-93.013333 9.002667-113.621334 0.512a56.106667 56.106667 0 0 1-14.165333-8.533334z m-342.656 4.010667h-0.896c-2.261333 0.213333-5.546667 0.981333-11.904 8.021333-14.848 16.64-20.053333 27.093333-32.298667 36.864-12.245333 9.728-28.16 14.933333-59.946666 21.461333a81.834667 81.834667 0 0 0-19.669334 6.144c1.237333 1.024 1.109333 1.28 2.986667 2.261334 4.650667 2.56 10.624 4.821333 15.445333 6.058666 13.653333 3.413333 36.096 7.381333 59.52 3.413334 23.424-4.010667 47.786667-15.232 68.565334-44.373334 3.584-5.034667 3.968-12.458667 1.024-20.437333-2.986667-7.978667-9.514667-14.848-14.122667-16.768a27.861333 27.861333 0 0 0-8.704-2.56z" p-id="2314"></path>    </svg>
);
const PostgresIcon = props => <Icon component={Postgres} {...props} />;

const GithubSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
  <path d="M938.666667 512a426.666667 426.666667 0 0 1-291.84 404.48 22.186667 22.186667 0 0 1-19.2-2.986667 21.76 21.76 0 0 1-8.96-17.493333v-113.92a170.666667 170.666667 0 0 0-21.333334-87.893333 10.666667 10.666667 0 0 1 0-11.52 11.52 11.52 0 0 1 8.533334-5.973334c104.106667-10.666667 162.133333-52.053333 162.133333-164.693333a200.96 200.96 0 0 0-50.773333-143.36 183.466667 183.466667 0 0 0 8.106666-51.2 184.746667 184.746667 0 0 0-6.4-46.08 20.906667 20.906667 0 0 0-22.613333-15.36 189.866667 189.866667 0 0 0-104.106667 50.346667 422.826667 422.826667 0 0 0-160.426666 0A189.866667 189.866667 0 0 0 327.68 256a20.906667 20.906667 0 0 0-22.613333 15.36A184.746667 184.746667 0 0 0 298.666667 317.44a183.466667 183.466667 0 0 0 8.106666 51.2A200.96 200.96 0 0 0 256 512c0 118.613333 64.426667 158.293333 182.613333 168.106667a158.293333 158.293333 0 0 0-29.44 65.28v5.12a29.013333 29.013333 0 0 0 0 5.973333 25.173333 25.173333 0 0 1-27.306666 21.76 42.666667 42.666667 0 0 1-18.346667-5.12 227.84 227.84 0 0 1-60.586667-53.76 430.506667 430.506667 0 0 0-34.133333-34.56 116.906667 116.906667 0 0 0-25.173333-16.64 20.906667 20.906667 0 0 0-20.48 0 21.333333 21.333333 0 0 0-9.813334 17.92v2.56a21.333333 21.333333 0 0 0 9.813334 17.92 193.706667 193.706667 0 0 1 39.253333 44.8 282.026667 282.026667 0 0 0 67.84 73.386667 105.813333 105.813333 0 0 0 59.733333 17.92h15.36V896a21.76 21.76 0 0 1-8.96 17.493333 22.186667 22.186667 0 0 1-19.2 2.986667A426.666667 426.666667 0 1 1 938.666667 512z"/>
  </svg>
);
const GithubSvgIcon = props => <Icon component={GithubSvg} {...props} />;

function menuTopBar(collapsed) {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      mode="horizontal"
      theme="dark"
      style={{height:'100%'}}
    >
      <Menu.Item key="1" icon={<FileTextOutlined />}>
        <Link to="/">
            Article         
        </Link> 
      </Menu.Item>

      <SubMenu key="sub1" icon={<IconFont type="icon-python" />} title="Python">
        <Menu.Item key="2">
            <Link to="/python/general">General</Link> 
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/python/dataframe"> Dataframe </Link> 
        </Menu.Item>
        <Menu.Item key="4">
            <Link to="/python/database"> Database </Link> 
        </Menu.Item>
        <Menu.Item key="5">
            <Link to="/python/plotly"> Plotly </Link> 
        </Menu.Item>
        <SubMenu key="sub2" title="Scraping">
          <Menu.Item key="6">BeautifulSoup</Menu.Item>
          <Menu.Item key="7">Selenium</Menu.Item>
        </SubMenu>
      </SubMenu>

      <Menu.Item key="8" icon={<ReactSvgIcon style={{fontSize: '17px'}} />}>
        <Link to="/react">
            React
        </Link> 
      </Menu.Item>

      <Menu.Item key="9" icon={<PostgresIcon style={{fontSize: '17px'}} />}>
        <Link to="/postgresql">
            PostGresQL
        </Link> 
      </Menu.Item>

      <Menu.Item key="10" icon={<GithubSvgIcon style={{fontSize: '20px'}}/>}>
        <Link to="/github">
            Github
        </Link> 
      </Menu.Item>


      <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="11">Option 9</Menu.Item>
        <Menu.Item key="12">Option 10</Menu.Item>
        <SubMenu key="sub4" title="Submenu">
          <Menu.Item key="13">Option 11</Menu.Item>
          <Menu.Item key="14">Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>

    </Menu>
  )
};

function menuLeftBar(collapsed) {
  return (
    <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          inlineCollapsed={collapsed}
          theme="dark"
          style={{height:'100%'}}
        >
          <Menu.Item key="1" icon={<FileTextOutlined />}>
            <Link to="/">
                Article         
            </Link> 
          </Menu.Item>

          <SubMenu key="sub1" icon={<IconFont type="icon-python" />} title="Python">
            <Menu.Item key="2">
                <Link to="/python/general">General</Link> 
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/python/dataframe"> Dataframe </Link> 
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/python/database"> Database </Link> 
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/python/dataviz"> Dataviz </Link> 
            </Menu.Item>
            <Menu.Item key="15">
                <Link to="/python/regex"> Regex </Link> 
            </Menu.Item>
            <SubMenu key="sub2" title="Scraping">
              <Menu.Item key="16">
                <Link to="/python/scraping/requests"> Requests </Link> 
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/python/scraping/beautifulsoup"> BeautifulSoup </Link> 
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/python/scraping/selenium"> Selenium </Link> 
              </Menu.Item>
            </SubMenu>

          </SubMenu>

          <Menu.Item key="8" icon={<ReactSvgIcon style={{fontSize: '17px'}} />}>
            <Link to="/react">
                React
            </Link> 
          </Menu.Item>

          <Menu.Item key="9" icon={<PostgresIcon style={{fontSize: '17px'}} />}>
            <Link to="/postgresql">
                PostGresQL
            </Link> 
          </Menu.Item>

          <Menu.Item key="10" icon={<GithubSvgIcon style={{fontSize: '20px'}}/>}>
            <Link to="/github">
                Github
            </Link> 
          </Menu.Item>

          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="11">Option 9</Menu.Item>
            <Menu.Item key="12">Option 10</Menu.Item>
            <SubMenu key="sub4" title="Submenu">
              <Menu.Item key="13">Option 11</Menu.Item>
              <Menu.Item key="14">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
  )
};

const { SubMenu } = Menu;

class LeftBar extends React.Component {
  state = {
    collapsed: true,
    width : window.innerWidth
  };
  
  handleResizeBar = e => {
    this.setState({width: window.innerWidth});
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeBar);
    this.handleResizeBar();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeBar);
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      // style={{backgroundColor:'rgb(0, 21, 41)'}}
      <div style={{}}>
      {this.state.width > 700 ?

        <div className={`${this.state.collapsed ? 'style-left-bar-collapsed' : 'style-left-bar-not-collapsed'}`} style={{position:'static',height:'100%', zIndex: '1'}}>
        <div className={`${this.state.collapsed ? 'style-left-bar-collapsed' : 'style-left-bar-not-collapsed'}`} style={{height:'100%', position:'fixed', zIndex: '1', backgroundColor:'rgb(0, 21, 41)'}}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ margin:8, marginLeft: 16, backgroundColor:'rgb(0, 21, 41)'}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          {menuLeftBar(this.state.collapsed)}
        </div>
        </div>
      :
        <div style={{position:'static', width:'100%'}}>
          {menuTopBar(this.state.collapsed)}
        </div>
      }
    </div>
    );
  }
}

export default LeftBar;
