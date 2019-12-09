const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

let data = [
    {
        id: '5deb8c08ddb73d8f8c75349b',
        data: {
            stationName: 'Ware',
            stationOwner: 'Swanson',
            stationLocation: {
                latitude: 29.31938,
                longitude: 25.361632
            }
        }
    },
    {
        id: '5deb8c086aa6605d80727af6',
        data: {
            stationName: 'Geraldine',
            stationOwner: 'Ferrell',
            stationLocation: {
                latitude: 26.845225,
                longitude: 36.644061
            }
        }
    },
    {
        id: '5deb8c0812884cf3b00e26e9',
        data: {
            stationName: 'Santiago',
            stationOwner: 'Mccall',
            stationLocation: {
                latitude: 39.511068,
                longitude: 22.962189
            }
        }
    },
    {
        id: '5deb8c085edc03bcde10c70f',
        data: {
            stationName: 'Jacobson',
            stationOwner: 'Luna',
            stationLocation: {
                latitude: 35.891852,
                longitude: 36.833644
            }
        }
    },
    {
        id: '5deb8c0870aa446a1cbbe3d9',
        data: {
            stationName: 'Wolfe',
            stationOwner: 'Holcomb',
            stationLocation: {
                latitude: 25.679913,
                longitude: 28.319053
            }
        }
    },
    {
        id: '5deb8c082520928c71012523',
        data: {
            stationName: 'Nettie',
            stationOwner: 'Horne',
            stationLocation: {
                latitude: 27.919844,
                longitude: 23.431847
            }
        }
    },
    {
        id: '5deb8c0880c35a4892e1d502',
        data: {
            stationName: 'Kent',
            stationOwner: 'Shaw',
            stationLocation: {
                latitude: 39.302932,
                longitude: 31.217098
            }
        }
    },
    {
        id: '5deb8c08afe75f9bd04b827b',
        data: {
            stationName: 'Jaime',
            stationOwner: 'Barnett',
            stationLocation: {
                latitude: 30.115884,
                longitude: 37.897879
            }
        }
    },
    {
        id: '5deb8c08148b6f0d6be88924',
        data: {
            stationName: 'Marion',
            stationOwner: 'Dotson',
            stationLocation: {
                latitude: 29.108926,
                longitude: 27.342331
            }
        }
    },
    {
        id: '5deb8c08eb13694b4f3d34b7',
        data: {
            stationName: 'Cecelia',
            stationOwner: 'Cline',
            stationLocation: {
                latitude: 28.757969,
                longitude: 37.832706
            }
        }
    },
    {
        id: '5deb8c08b76262630838447d',
        data: {
            stationName: 'Zamora',
            stationOwner: 'Allen',
            stationLocation: {
                latitude: 36.374629,
                longitude: 30.183324
            }
        }
    },
    {
        id: '5deb8c0839637481c617bf41',
        data: {
            stationName: 'Maxwell',
            stationOwner: 'Mcmillan',
            stationLocation: {
                latitude: 24.176981,
                longitude: 30.23465
            }
        }
    },
    {
        id: '5deb8c08e997cbfc8bd14d03',
        data: {
            stationName: 'Brandi',
            stationOwner: 'Hurley',
            stationLocation: {
                latitude: 20.562617,
                longitude: 21.153002
            }
        }
    },
    {
        id: '5deb8c081908261569b9e30d',
        data: {
            stationName: 'Holloway',
            stationOwner: 'Oliver',
            stationLocation: {
                latitude: 36.020617,
                longitude: 32.171191
            }
        }
    },
    {
        id: '5deb8c08fef5ca7a9263879a',
        data: {
            stationName: 'Tracie',
            stationOwner: 'York',
            stationLocation: {
                latitude: 31.184789,
                longitude: 35.57469
            }
        }
    },
    {
        id: '5deb8c0835b3f0a0331e5bee',
        data: {
            stationName: 'Key',
            stationOwner: 'Harrell',
            stationLocation: {
                latitude: 27.066766,
                longitude: 31.757438
            }
        }
    },
    {
        id: '5deb8c0872b2a8b6b886dc9f',
        data: {
            stationName: 'Tania',
            stationOwner: 'Montoya',
            stationLocation: {
                latitude: 30.261271,
                longitude: 32.876664
            }
        }
    },
    {
        id: '5deb8c08170b389097062055',
        data: {
            stationName: 'Chrystal',
            stationOwner: 'Lancaster',
            stationLocation: {
                latitude: 34.361028,
                longitude: 28.599877
            }
        }
    },
    {
        id: '5deb8c083cb43986372fe70f',
        data: {
            stationName: 'Ratliff',
            stationOwner: 'Hawkins',
            stationLocation: {
                latitude: 29.117174,
                longitude: 22.180807
            }
        }
    },
    {
        id: '5deb8c081ee14f4107585885',
        data: {
            stationName: 'Penny',
            stationOwner: 'Acevedo',
            stationLocation: {
                latitude: 30.275213,
                longitude: 31.551631
            }
        }
    },
    {
        id: '5deb8c08e986feb7e59a67f1',
        data: {
            stationName: 'Crosby',
            stationOwner: 'Graham',
            stationLocation: {
                latitude: 22.635409,
                longitude: 26.423355
            }
        }
    },
    {
        id: '5deb8c084e57b196e3a09499',
        data: {
            stationName: 'Nikki',
            stationOwner: 'Taylor',
            stationLocation: {
                latitude: 30.517894,
                longitude: 29.812139
            }
        }
    },
    {
        id: '5deb8c080577422793265c75',
        data: {
            stationName: 'Erickson',
            stationOwner: 'Heath',
            stationLocation: {
                latitude: 34.758518,
                longitude: 23.45321
            }
        }
    },
    {
        id: '5deb8c082ef7f72ac4b62d1d',
        data: {
            stationName: 'Turner',
            stationOwner: 'Ratliff',
            stationLocation: {
                latitude: 27.479349,
                longitude: 33.088007
            }
        }
    },
    {
        id: '5deb8c08a256c85caa215f3b',
        data: {
            stationName: 'Mckinney',
            stationOwner: 'Miranda',
            stationLocation: {
                latitude: 38.972708,
                longitude: 20.760133
            }
        }
    },
    {
        id: '5deb8c0892904077a46a81c5',
        data: {
            stationName: 'Christian',
            stationOwner: 'Lott',
            stationLocation: {
                latitude: 29.897348,
                longitude: 30.592977
            }
        }
    },
    {
        id: '5deb8c087c03da3bd14842f0',
        data: {
            stationName: 'Velazquez',
            stationOwner: 'Lowe',
            stationLocation: {
                latitude: 39.574598,
                longitude: 36.97365
            }
        }
    },
    {
        id: '5deb8c089e0b3b02c5284be1',
        data: {
            stationName: 'Barnes',
            stationOwner: 'Torres',
            stationLocation: {
                latitude: 24.035744,
                longitude: 31.334659
            }
        }
    },
    {
        id: '5deb8c08d7ff568eef5494ad',
        data: {
            stationName: 'Roslyn',
            stationOwner: 'Bradshaw',
            stationLocation: {
                latitude: 24.53668,
                longitude: 21.900104
            }
        }
    },
    {
        id: '5deb8c086450d876d4979e56',
        data: {
            stationName: 'Harrison',
            stationOwner: 'Gould',
            stationLocation: {
                latitude: 32.301164,
                longitude: 23.032544
            }
        }
    },
    {
        id: '5deb8c0881768d3ec2fdda56',
        data: {
            stationName: 'Mills',
            stationOwner: 'Clark',
            stationLocation: {
                latitude: 35.281327,
                longitude: 23.677798
            }
        }
    },
    {
        id: '5deb8c0804d4c73bcc132103',
        data: {
            stationName: 'Leach',
            stationOwner: 'Shepherd',
            stationLocation: {
                latitude: 39.424568,
                longitude: 27.798916
            }
        }
    },
    {
        id: '5deb8c086674c7721024e1fe',
        data: {
            stationName: 'Zimmerman',
            stationOwner: 'Ramsey',
            stationLocation: {
                latitude: 25.522457,
                longitude: 34.872707
            }
        }
    },
    {
        id: '5deb8c085d000f12304ae50a',
        data: {
            stationName: 'French',
            stationOwner: 'Prince',
            stationLocation: {
                latitude: 31.429598,
                longitude: 37.69717
            }
        }
    },
    {
        id: '5deb8c08df1fd93e0a6584f7',
        data: {
            stationName: 'Rodriguez',
            stationOwner: 'Andrews',
            stationLocation: {
                latitude: 29.169342,
                longitude: 26.780376
            }
        }
    },
    {
        id: '5deb8c0810b7b77d105581ec',
        data: {
            stationName: 'Byrd',
            stationOwner: 'Richards',
            stationLocation: {
                latitude: 32.546935,
                longitude: 27.476673
            }
        }
    },
    {
        id: '5deb8c087d5ab79fc7b43d5c',
        data: {
            stationName: 'Nicholson',
            stationOwner: 'Hayes',
            stationLocation: {
                latitude: 24.661055,
                longitude: 22.934815
            }
        }
    },
    {
        id: '5deb8c08031a0a3c84c4afd5',
        data: {
            stationName: 'Faulkner',
            stationOwner: 'Booth',
            stationLocation: {
                latitude: 28.84422,
                longitude: 22.951175
            }
        }
    },
    {
        id: '5deb8c081ce730ece6f1288a',
        data: {
            stationName: 'Mccall',
            stationOwner: 'Waters',
            stationLocation: {
                latitude: 36.321981,
                longitude: 23.315483
            }
        }
    },
    {
        id: '5deb8c0896814ca2b21f0814',
        data: {
            stationName: 'Tillman',
            stationOwner: 'Stuart',
            stationLocation: {
                latitude: 39.187737,
                longitude: 30.468886
            }
        }
    },
    {
        id: '5deb8c0825a84dc8d0d29932',
        data: {
            stationName: 'Blackwell',
            stationOwner: 'Aguilar',
            stationLocation: {
                latitude: 39.690362,
                longitude: 27.70241
            }
        }
    },
    {
        id: '5deb8c08aa4b249d450e200b',
        data: {
            stationName: 'Frieda',
            stationOwner: 'Jones',
            stationLocation: {
                latitude: 39.045865,
                longitude: 33.534232
            }
        }
    },
    {
        id: '5deb8c08284a51b14e8544b9',
        data: {
            stationName: 'Allie',
            stationOwner: 'Buckner',
            stationLocation: {
                latitude: 35.74541,
                longitude: 34.471039
            }
        }
    },
    {
        id: '5deb8c08ae916c9d4f246bfc',
        data: {
            stationName: 'Branch',
            stationOwner: 'Rowe',
            stationLocation: {
                latitude: 33.965151,
                longitude: 23.251011
            }
        }
    },
    {
        id: '5deb8c08e0c4bc991ab89b77',
        data: {
            stationName: 'Olive',
            stationOwner: 'Dillard',
            stationLocation: {
                latitude: 20.394283,
                longitude: 39.966636
            }
        }
    },
    {
        id: '5deb8c08f7f5870b2aa49ef6',
        data: {
            stationName: 'Dodson',
            stationOwner: 'Morton',
            stationLocation: {
                latitude: 28.232219,
                longitude: 31.491241
            }
        }
    },
    {
        id: '5deb8c08304b6fc24499873a',
        data: {
            stationName: 'Karla',
            stationOwner: 'Evans',
            stationLocation: {
                latitude: 22.855651,
                longitude: 24.423278
            }
        }
    },
    {
        id: '5deb8c08c0e7d3035140f527',
        data: {
            stationName: 'Therese',
            stationOwner: 'Foley',
            stationLocation: {
                latitude: 33.361077,
                longitude: 34.708122
            }
        }
    },
    {
        id: '5deb8c082aa109511d12a01e',
        data: {
            stationName: 'Madelyn',
            stationOwner: 'Velazquez',
            stationLocation: {
                latitude: 28.71541,
                longitude: 37.783058
            }
        }
    },
    {
        id: '5deb8c08fe6d1012a8c632ab',
        data: {
            stationName: 'Elnora',
            stationOwner: 'Barnes',
            stationLocation: {
                latitude: 38.452464,
                longitude: 24.627279
            }
        }
    },
    {
        id: '5deb8c0837f34abadbd199ec',
        data: {
            stationName: 'Randi',
            stationOwner: 'Padilla',
            stationLocation: {
                latitude: 36.686674,
                longitude: 21.373867
            }
        }
    },
    {
        id: '5deb8c08e34b3db1637bbf81',
        data: {
            stationName: 'Violet',
            stationOwner: 'Horn',
            stationLocation: {
                latitude: 39.36739,
                longitude: 36.815821
            }
        }
    },
    {
        id: '5deb8c08df748595648c8f4b',
        data: {
            stationName: 'Hoover',
            stationOwner: 'Schwartz',
            stationLocation: {
                latitude: 28.189617,
                longitude: 33.493146
            }
        }
    },
    {
        id: '5deb8c08eee1bb3db51543da',
        data: {
            stationName: 'Carolina',
            stationOwner: 'Zimmerman',
            stationLocation: {
                latitude: 23.784123,
                longitude: 28.826402
            }
        }
    },
    {
        id: '5deb8c08f28ba548b3db9c8a',
        data: {
            stationName: 'Cynthia',
            stationOwner: 'Middleton',
            stationLocation: {
                latitude: 21.433865,
                longitude: 36.431126
            }
        }
    },
    {
        id: '5deb8c0895fe312b5fb69f2d',
        data: {
            stationName: 'Earlene',
            stationOwner: 'Underwood',
            stationLocation: {
                latitude: 27.31757,
                longitude: 30.311133
            }
        }
    },
    {
        id: '5deb8c081ca1890c65d1da6a',
        data: {
            stationName: 'Sheri',
            stationOwner: 'Webb',
            stationLocation: {
                latitude: 35.187498,
                longitude: 33.72212
            }
        }
    },
    {
        id: '5deb8c082805c5b41ed5c88f',
        data: {
            stationName: 'Williams',
            stationOwner: 'Melton',
            stationLocation: {
                latitude: 37.111451,
                longitude: 27.03285
            }
        }
    },
    {
        id: '5deb8c08f90960f29ba48d99',
        data: {
            stationName: 'Casey',
            stationOwner: 'Dennis',
            stationLocation: {
                latitude: 20.066832,
                longitude: 23.950364
            }
        }
    },
    {
        id: '5deb8c0877ba6e81d8ca208e',
        data: {
            stationName: 'Susie',
            stationOwner: 'Oneil',
            stationLocation: {
                latitude: 21.065069,
                longitude: 23.563595
            }
        }
    },
    {
        id: '5deb8c087653c4d16cac021c',
        data: {
            stationName: 'Olivia',
            stationOwner: 'Whitfield',
            stationLocation: {
                latitude: 22.548363,
                longitude: 32.99842
            }
        }
    },
    {
        id: '5deb8c08c89057539d1a0dae',
        data: {
            stationName: 'Bullock',
            stationOwner: 'Patel',
            stationLocation: {
                latitude: 27.759102,
                longitude: 26.893915
            }
        }
    },
    {
        id: '5deb8c082dcc3f1def93b6c9',
        data: {
            stationName: 'Anne',
            stationOwner: 'Mason',
            stationLocation: {
                latitude: 31.853783,
                longitude: 38.746513
            }
        }
    },
    {
        id: '5deb8c08389a6b0b6f9d67fa',
        data: {
            stationName: 'Howard',
            stationOwner: 'Bruce',
            stationLocation: {
                latitude: 35.076935,
                longitude: 29.212128
            }
        }
    }
];

for(let i = 0; i < data.length; i++) {
    db.collection('stations').doc('ORPFEIeRvk8mnlSlSx4H').set(data[i]);
}
