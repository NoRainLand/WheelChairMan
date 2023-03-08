{
  "_$ver": 1,
  "_$id": "rdbohobl",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "mouseThrough": true,
  "_$child": [
    {
      "_$id": "n9gjxcltvl",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome",
        "material": {
          "_$uuid": "793cffc6-730a-4756-a658-efe98c230292",
          "_$type": "Material"
        }
      },
      "ambientMode": 0,
      "ambientColor": {
        "_$type": "Color",
        "r": 0.424308,
        "g": 0.4578516,
        "b": 0.5294118
      },
      "_reflectionsIblSamples": 128,
      "fogStart": 0,
      "fogEnd": 300,
      "fogDensity": 0.01,
      "fogColor": {
        "_$type": "Color",
        "r": 0.5,
        "g": 0.5,
        "b": 0.5
      },
      "lightmaps": [
        {
          "_$type": "Lightmap"
        },
        {
          "_$type": "Lightmap"
        }
      ],
      "lightingSettings": {
        "_$uuid": "42939f11-7ed8-41e3-a5f1-67585c907054",
        "_$type": "LightingSettings"
      },
      "_$comp": [
        {
          "_$type": "703165f6-1bb3-483a-b1f7-918d3418e246",
          "scriptPath": "../src/TestPhy.ts",
          "bullet": {
            "_$uuid": "7ef2368a-e43e-4fe1-bf1d-52790f0b35e9",
            "_$type": "Prefab"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "6jx8h8bvc6",
          "_$type": "Camera",
          "name": "Main Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 16.71630663055267,
              "y": 8.925015330431831,
              "z": 9.090217548142132
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.5498805982007205,
              "w": 0.83524327457479
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 90,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 1,
          "clearColor": {
            "_$type": "Color",
            "r": 0.3921,
            "g": 0.5843,
            "b": 0.9294
          },
          "cullingMask": 2147483647,
          "normalizedViewport": {
            "_$type": "Viewport",
            "width": 1,
            "height": 1
          },
          "depthTextureFormat": 35
        },
        {
          "_$id": "6ni3p096l5",
          "_$type": "Sprite3D",
          "name": "Direction Light",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 5,
              "y": 5,
              "z": 5
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.40821789367673483,
              "y": 0.23456971600980447,
              "z": 0.109381654946615,
              "w": 0.875426098065593
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "intensity": 2.72,
              "lightmapBakedType": 0,
              "shadowMode": 3,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "shadowCascadesMode": 0,
              "strength": null,
              "angle": null,
              "maxBounces": null
            }
          ]
        },
        {
          "_$id": "a9p9tdkp",
          "_$type": "Sprite3D",
          "name": "Cube",
          "isStatic": true,
          "_$comp": [
            {
              "_$type": "MeshFilter",
              "sharedMesh": {
                "_$uuid": "6e013e32-fec7-4397-80d1-f918a07607be",
                "_$type": "Mesh"
              }
            },
            {
              "_$type": "MeshRenderer",
              "receiveShadow": true,
              "castShadow": true,
              "lightmapIndex": 1,
              "lightmapScaleOffset": {
                "_$type": "Vector4",
                "x": 0.797,
                "y": 0.531,
                "z": 0.203,
                "w": 0.203
              },
              "sharedMaterials": [
                {
                  "_$uuid": "6f90bbb0-bcb2-4311-8a9d-3d8277522098",
                  "_$type": "Material"
                }
              ],
              "renderMode": null
            }
          ]
        },
        {
          "_$id": "1pbeo0xf",
          "_$type": "Sprite3D",
          "name": "GameScene",
          "_$comp": [
            {
              "_$type": "UI3D",
              "resolutionRate": 128,
              "scale": {
                "_$type": "Vector2",
                "x": 1,
                "y": 1
              }
            }
          ]
        },
        {
          "_$id": "35tnnv28",
          "_$type": "Sprite3D",
          "name": "Trail",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 9.069472725137752,
              "y": -1.1533825983178758e-7,
              "z": 2.2683497036268818e-7
            }
          },
          "_$comp": [
            {
              "_$type": "TrailRenderer",
              "sharedMaterials": [
                {
                  "_$uuid": "db42ad88-9d69-48e5-8c97-901e33356b70",
                  "_$type": "Material"
                }
              ],
              "renderMode": null,
              "_trailFilter": {
                "alignment": 1,
                "widthCurve": [
                  {
                    "_$type": "FloatKeyframe",
                    "inTangent": 0,
                    "outTangent": 0,
                    "value": 1,
                    "inWeight": 0.33333,
                    "outWeight": 0.33333,
                    "weightedMode": 0,
                    "time": 0
                  },
                  {
                    "_$type": "FloatKeyframe",
                    "inTangent": 0,
                    "outTangent": 0,
                    "value": 1,
                    "inWeight": 0.33333,
                    "outWeight": 0.33333,
                    "weightedMode": 0,
                    "time": 1
                  }
                ],
                "colorGradient": {
                  "_$type": "Gradient",
                  "_alphaElements": {
                    "_$type": "Float32Array",
                    "value": [
                      0,
                      1,
                      1,
                      1,
                      0,
                      0,
                      0,
                      0
                    ]
                  },
                  "_colorAlphaKeysCount": 2,
                  "_rgbElements": {
                    "_$type": "Float32Array",
                    "value": [
                      0,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                    ]
                  },
                  "_colorRGBKeysCount": 2
                }
              }
            }
          ]
        },
        {
          "_$id": "hklj9loj",
          "_$type": "Sprite3D",
          "name": "Bullet_Revolver",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.0187596907350565,
              "z": 3.718546252455413
            }
          },
          "_$comp": [
            {
              "_$type": "c08609ed-ebe2-4062-8e7f-0779439120be",
              "scriptPath": "../src/Game/Bullet/BulletItem.ts"
            },
            {
              "_$type": "PhysicsCollider",
              "isTrigger": true,
              "colliderShape": {
                "_$type": "BoxColliderShape",
                "sizeX": 0.15,
                "sizeY": 0.15,
                "sizeZ": 0.2
              }
            }
          ],
          "_$child": [
            {
              "_$id": "nvl94bsm",
              "_$type": "Sprite3D",
              "name": "Bullet_Revolver",
              "transform": {
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.7081770951931118,
                  "y": 8.659550744536745e-17,
                  "z": 8.659550744536745e-17,
                  "w": 0.706034844638596
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.03,
                  "y": 0.03,
                  "z": 0.03
                }
              },
              "_$comp": [
                {
                  "_$type": "MeshFilter",
                  "sharedMesh": {
                    "_$uuid": "c179dad4-6b2e-493a-bef2-f1cf078f3bff@lm0",
                    "_$type": "Mesh"
                  }
                },
                {
                  "_$type": "MeshRenderer",
                  "receiveShadow": true,
                  "castShadow": true,
                  "sharedMaterials": [
                    {
                      "_$uuid": "64c4d288-cfe0-42da-ade8-7058702b4b7b",
                      "_$type": "Material"
                    }
                  ],
                  "renderMode": null
                }
              ]
            },
            {
              "_$id": "x1vs4pwi",
              "_$type": "Sprite3D",
              "name": "Trail",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "z": -0.16106832027435303
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "y": -0.7071067811865475,
                  "w": 0.7071067811865476
                }
              },
              "_$comp": [
                {
                  "_$type": "TrailRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "db42ad88-9d69-48e5-8c97-901e33356b70",
                      "_$type": "Material"
                    }
                  ],
                  "renderMode": null,
                  "_trailFilter": {
                    "alignment": 1,
                    "widthCurve": [
                      {
                        "_$type": "FloatKeyframe",
                        "inTangent": 0,
                        "outTangent": 0,
                        "value": 0.04411764705882448,
                        "inWeight": 0.33333,
                        "outWeight": 0.33333,
                        "weightedMode": 0,
                        "time": 0
                      },
                      {
                        "_$type": "FloatKeyframe",
                        "inTangent": 0,
                        "outTangent": 0,
                        "value": 0.008823529411765285,
                        "inWeight": 0.33333,
                        "outWeight": 0.33333,
                        "weightedMode": 0,
                        "time": 1
                      }
                    ],
                    "colorGradient": {
                      "_$type": "Gradient",
                      "_alphaElements": {
                        "_$type": "Float32Array",
                        "value": [
                          0,
                          1,
                          1,
                          0.20000000298023224
                        ]
                      },
                      "_colorAlphaKeysCount": 2,
                      "_rgbElements": {
                        "_$type": "Float32Array",
                        "value": [
                          0,
                          0.5338690280914307,
                          0.028363680467009544,
                          0.9147287011146545,
                          1,
                          0.5110607743263245,
                          0.03701700642704964,
                          0.8682170510292053
                        ]
                      },
                      "_colorRGBKeysCount": 2
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}