var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8095677010899047,
          "pitch": 0.1522732008304004,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 0.2152700205151188,
          "pitch": -0.36503333672693294,
          "rotation": 0,
          "target": "6-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.825422056501492,
          "pitch": 0.2095262787178278,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 2.9718152950357943,
          "pitch": 0.041327553476307344,
          "rotation": 0,
          "target": "4-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-wash",
      "name": "Dining wash",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2212635924622806,
          "pitch": 0.14733371619186642,
          "rotation": 0.7853981633974483,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21903720668222704,
          "pitch": 0.0987919191369997,
          "rotation": 0,
          "target": "2-dining-wash"
        },
        {
          "yaw": -0.7130424563345219,
          "pitch": 0.051437101643596606,
          "rotation": 0,
          "target": "4-guest-room"
        },
        {
          "yaw": -1.9114771952055385,
          "pitch": 0.11164281906401463,
          "rotation": 0,
          "target": "5-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-guest-room",
      "name": "Guest room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.206170251708574,
          "pitch": 0.057810829625317695,
          "rotation": 5.497787143782138,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bedroom",
      "name": "Master Bedroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.277989812651514,
          "pitch": 0.10561565260294792,
          "rotation": 0.7853981633974483,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-staircase",
      "name": "Staircase",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5419334222012004,
          "pitch": -0.18989572183603087,
          "rotation": 0,
          "target": "7-first-floor-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-first-floor-lounge",
      "name": "First floor Lounge",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.168390542955624,
          "pitch": 0.04705042161302231,
          "rotation": 0,
          "target": "9-ff-bedroom-02"
        },
        {
          "yaw": 3.139279128955298,
          "pitch": 0.09739983887148185,
          "rotation": 0,
          "target": "8-ff-bedroom-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ff-bedroom-01",
      "name": "FF Bedroom 01",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3335880357972094,
          "pitch": 0.050176142974066806,
          "rotation": 0,
          "target": "7-first-floor-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ff-bedroom-02",
      "name": "FF Bedroom 02",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0311327193383217,
          "pitch": 0.1498685770650976,
          "rotation": 0.7853981633974483,
          "target": "7-first-floor-lounge"
        },
        {
          "yaw": 1.3846141691209493,
          "pitch": 0.17824919480554513,
          "rotation": 0,
          "target": "10-walk--in-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-walk--in-closet",
      "name": "Walk  in Closet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9756739071243388,
          "pitch": 0.1249662249370651,
          "rotation": 0,
          "target": "9-ff-bedroom-02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mr. Siddiq Reisdence ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
