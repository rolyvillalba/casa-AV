var APP_DATA = {
  "scenes": [
    {
      "id": "0-calle",
      "name": "CALLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2189295971039993
      },
      "linkHotspots": [
        {
          "yaw": -0.6966452761948148,
          "pitch": 0.22435001758325868,
          "rotation": 0,
          "target": "1-jardin"
        },
        {
          "yaw": 0.7001015926402232,
          "pitch": 0.21083303132482456,
          "rotation": 0,
          "target": "6-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-jardin",
      "name": "JARDIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.42984928547939916,
          "pitch": 0.3771708108162848,
          "rotation": 0,
          "target": "2-estar"
        },
        {
          "yaw": 0.9243116510014957,
          "pitch": 0.15681316450602623,
          "rotation": 10.995574287564278,
          "target": "6-patio"
        },
        {
          "yaw": 3.131175025033869,
          "pitch": 0.39675453683775785,
          "rotation": 0,
          "target": "0-calle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14864469590672869,
          "pitch": 0.2698636587855461,
          "rotation": 3.141592653589793,
          "target": "3-estar-2"
        },
        {
          "yaw": 1.7690844819953533,
          "pitch": 0.49517187738983104,
          "rotation": 0,
          "target": "1-jardin"
        },
        {
          "yaw": -1.6340849050049258,
          "pitch": 0.534498906070823,
          "rotation": 0,
          "target": "4-cocina-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-estar-2",
      "name": "ESTAR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6524931661970435,
          "pitch": 0.3376536476294607,
          "rotation": 3.141592653589793,
          "target": "2-estar"
        },
        {
          "yaw": 2.717151574909196,
          "pitch": 0.6710590292843825,
          "rotation": 0,
          "target": "5-cocina-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina-1",
      "name": "COCINA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5662435526512795,
          "pitch": 0.2701105397464314,
          "rotation": 3.141592653589793,
          "target": "5-cocina-2"
        },
        {
          "yaw": 1.7903478174402467,
          "pitch": 0.47420332916399666,
          "rotation": 0,
          "target": "2-estar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6550550678254936,
          "pitch": 0.02616622953109804,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">a Suite Ppal.</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-cocina-2",
      "name": "COCINA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.855194043200349,
          "pitch": 0.4681537705502965,
          "rotation": 0,
          "target": "3-estar-2"
        },
        {
          "yaw": -1.732096275637451,
          "pitch": 0.1728096499752656,
          "rotation": 4.71238898038469,
          "target": "2-estar"
        },
        {
          "yaw": 2.046448297699312,
          "pitch": 0.4966199269089273,
          "rotation": 0,
          "target": "6-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7749822818303276,
          "pitch": 0.10016028566117008,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">a paso P.B.</font></font></font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-patio",
      "name": "PATIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.342366208013889,
          "pitch": 0.17355208727971672,
          "rotation": 7.853981633974483,
          "target": "5-cocina-2"
        },
        {
          "yaw": -1.5140060441285819,
          "pitch": 0.038796960268097536,
          "rotation": 1.5707963267948966,
          "target": "1-jardin"
        },
        {
          "yaw": -1.6568884127575068,
          "pitch": 0.15844951275562025,
          "rotation": 0,
          "target": "0-calle"
        },
        {
          "yaw": 0.8206261614692476,
          "pitch": -0.18407038045976876,
          "rotation": 0,
          "target": "7-terraza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.42758764391390436,
          "pitch": 0.14635478011359204,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">a paso P.B.</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "7-terraza",
      "name": "TERRAZA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5323915974536924,
          "pitch": 0.2816376760850847,
          "rotation": 3.141592653589793,
          "target": "6-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.584901662172788,
          "pitch": 0.20863171194063312,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">a paso P.A.</font></font></font></font>",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
