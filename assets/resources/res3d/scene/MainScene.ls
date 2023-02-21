{
  "_$ver": 1,
  "_$id": "1i6z3x23",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "3togt7ld",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome",
        "material": {
          "_$uuid": "4da33711-d625-46f1-8a6f-3f4b5c04a89d",
          "_$type": "Material"
        }
      },
      "ambientMode": 0,
      "ambientColor": {
        "_$type": "Color",
        "r": 0.6860465116279071,
        "g": 0.6860465116279071,
        "b": 0.6860465116279071
      },
      "_reflectionsIblSamples": 128,
      "fogStart": 300,
      "fogEnd": 1000,
      "fogDensity": 0.01,
      "fogColor": {
        "_$type": "Color",
        "r": 0.7,
        "g": 0.7,
        "b": 0.7
      },
      "lightmaps": [],
      "_$comp": [
        {
          "_$type": "71c8c727-1736-44b1-984f-02439872df63",
          "scriptPath": "../src/Scene3d/MainScene.ts"
        }
      ],
      "_$child": [
        {
          "_$id": "1ojir4b6",
          "_$type": "Camera",
          "name": "Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.4673671931358485,
              "y": 1.0246626637045144,
              "z": 4.391789157407845
            },
            "localRotation": {
              "_$type": "Quaternion",
              "z": 1.2833136862046034e-9
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 60,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 1,
          "clearColor": {
            "_$type": "Color",
            "r": 0.39215686274509803,
            "g": 0.5843137254901961,
            "b": 0.9294117647058824
          },
          "fxaa": true,
          "cullingMask": 2147483647,
          "normalizedViewport": {
            "_$type": "Viewport",
            "width": 1,
            "height": 1
          },
          "depthTextureFormat": 35
        },
        {
          "_$id": "lzzgqaum",
          "_$type": "Sprite3D",
          "name": "Plane",
          "active": false,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 6.292169274502157e-8,
              "y": 4.2175628460594666e-8,
              "z": 15.38074888629858
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.7071067811865475,
              "w": 0.7071067811865476
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 60,
              "y": 40,
              "z": 1
            }
          },
          "_$comp": [
            {
              "_$type": "MeshFilter",
              "sharedMesh": {
                "_$uuid": "4a4afb22-ef83-40a2-a6a8-212a2d20c52f",
                "_$type": "Mesh"
              }
            },
            {
              "_$type": "MeshRenderer",
              "receiveShadow": true,
              "castShadow": true,
              "sharedMaterials": [
                {
                  "_$uuid": "ddcb0be2-cb6c-4b22-a34e-6cef3621cfe5",
                  "_$type": "Material"
                }
              ]
            }
          ]
        },
        {
          "_$id": "qs3d99pu",
          "_$prefab": "abae8f65-944b-48db-b7ad-f6bdaa7fa0f5",
          "name": "Wheelchair",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0.20287418412521252,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0.9456836040753975,
              "z": 0,
              "w": -0.3250884817752957
            }
          },
          "_$child": [
            {
              "_$override": "#42",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "14b65c0e-aed6-4513-b46f-b595d30be26c",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            },
            {
              "_$override": "#43",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "14b65c0e-aed6-4513-b46f-b595d30be26c",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            },
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "14b65c0e-aed6-4513-b46f-b595d30be26c",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "3noa3r9y",
          "_$prefab": "c069a249-a187-4e27-8024-b1eb48302538",
          "name": "SM_Env_Skyline_01",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.1964621648985485e-7,
              "y": -31.195710922245418,
              "z": 1.1943111419677734
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 100,
              "y": 200,
              "z": 100
            }
          },
          "_$comp": [
            {
              "_$override": "Animator",
              "enabled": false
            }
          ],
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "02f85e6d-524b-4ead-9748-b28d9c6f2723",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            },
            {
              "_$override": "#45",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "02f85e6d-524b-4ead-9748-b28d9c6f2723",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            },
            {
              "_$override": "#46",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "02f85e6d-524b-4ead-9748-b28d9c6f2723",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            },
            {
              "_$override": "#47",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "02f85e6d-524b-4ead-9748-b28d9c6f2723",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "8r61k940",
          "_$prefab": "2fd941ba-4a89-418a-8374-4a8657476b58",
          "name": "SM_Env_WaterEdge_Rock_01",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 5.703006744384766,
              "y": -0.4464682038797978,
              "z": -0.17774266004562378
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 100,
              "y": 100,
              "z": 100
            }
          },
          "_$comp": [
            {
              "_$override": "Animator",
              "enabled": false
            }
          ],
          "_$child": [
            {
              "_$override": "#44",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.006861342520226722,
                  "y": 0.0012280179709901287,
                  "z": -0.002567767737138655
                }
              },
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "84nzqn38",
          "_$prefab": "28a940bc-8d4c-4748-95b1-ab776dcfe95c",
          "name": "SM_Env_Tree_01",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.3405558051036346,
              "y": -0.7597535977113067,
              "z": -0.17774266004562378
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0.06882186241544358,
              "w": 0.9976289647226919
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 100,
              "y": 100,
              "z": 100
            }
          },
          "_$comp": [
            {
              "_$override": "Animator",
              "enabled": false
            }
          ],
          "_$child": [
            {
              "_$override": "#44",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.02816630892876519,
                  "y": 1.4115164592709561e-10,
                  "z": 1.1788903186982225e-11
                }
              },
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "9t354ak4",
          "_$prefab": "ba53afe6-defb-4cb5-962f-a51d76035d7d",
          "name": "SM_Env_Tree_02",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.1137644590729747,
              "y": -0.4099595511759493,
              "z": 1.4912078716955277
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0.6142730907601412,
              "z": 0,
              "w": 0.7890935115485258
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 100,
              "y": 100,
              "z": 100
            }
          },
          "_$comp": [
            {
              "_$override": "Animator",
              "enabled": false
            }
          ],
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "9k41vyw9",
          "_$prefab": "b73593e2-c0d7-486d-99f3-a58ae62a608d",
          "name": "SM_Env_Tree_03",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 3.719302529914872,
              "y": -0.22869479549710325,
              "z": 2.2853821601429485
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 100,
              "y": 100,
              "z": 100
            }
          },
          "_$comp": [
            {
              "_$override": "Animator",
              "enabled": false
            }
          ],
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "u7nj4a8r",
          "_$type": "Sprite3D",
          "name": "DirectionLight",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -5.5,
              "y": 2,
              "z": 5.5
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.7504293204989291,
              "y": -0.16837538895313456,
              "z": 0.45681253971521874,
              "w": 0.447021103404893
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "color": {
                "_$type": "Color",
                "r": 0.6162790697674418,
                "g": 0.6162790697674418,
                "b": 0.6162790697674418
              },
              "intensity": 1,
              "lightmapBakedType": 0,
              "shadowMode": 3,
              "shadowStrength": 1,
              "shadowDistance": 10,
              "shadowDepthBias": 1.234,
              "shadowNormalBias": 0,
              "shadowNearPlane": 7.142,
              "shadowCascadesMode": 0,
              "strength": 1,
              "angle": 0.526,
              "maxBounces": 1024
            }
          ]
        },
        {
          "_$id": "jkes72ud",
          "_$type": "Sprite3D",
          "name": "PointLight",
          "active": false,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.5674945088380765,
              "y": 2.5124976024933496,
              "z": -0.17774310219833359
            }
          },
          "_$comp": [
            {
              "_$type": "PointLightCom",
              "intensity": 0.37,
              "lightmapBakedType": 0,
              "shadowMode": 0,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "range": 6,
              "power": 10,
              "radius": 0.25,
              "maxBounces": 1024
            }
          ]
        },
        {
          "_$id": "ebqzvyoq",
          "_$prefab": "ba53afe6-defb-4cb5-962f-a51d76035d7d",
          "name": "SM_Env_Tree_02(1)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -18.979270517562075,
              "y": -0.16660768490033617,
              "z": -0.174821138381958
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 100,
              "y": 100,
              "z": 100
            }
          },
          "_$comp": [
            {
              "_$override": "Animator",
              "enabled": false
            }
          ],
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "xgdm510v",
          "_$type": "Sprite3D",
          "name": "AreaLight",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -0.42544653518352044,
              "y": 0.9393229620526524,
              "z": -0.5712293357751751
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.6506243168105648,
              "y": 0.07176844679108484,
              "z": -0.20326897769173902,
              "w": 0.7281613908524239
            }
          },
          "_$comp": [
            {
              "_$type": "AreaLightCom",
              "intensity": 1,
              "lightmapBakedType": 2,
              "shadowMode": 3,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "power": 100,
              "shape": 0,
              "size": {
                "_$type": "Vector2",
                "x": 5.028245837070644,
                "y": 6.4393795352586904
              },
              "spread": 90,
              "maxBounces": 1024
            }
          ]
        },
        {
          "_$id": "j8fmpju8",
          "_$type": "Sprite3D",
          "name": "DirectionLight(1)",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.3996548056602478,
              "y": 3.3949828147888184,
              "z": -0.324506014585495
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.10081135017618797,
              "y": 0.08205745382536925,
              "z": -0.008343401921854716,
              "w": 0.9914807277964217
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "color": {
                "_$type": "Color",
                "r": 0.5968992248062015,
                "g": 0.5968992248062015,
                "b": 0.5968992248062015
              },
              "intensity": 0.41,
              "lightmapBakedType": 0,
              "shadowMode": 0,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "shadowCascadesMode": 0,
              "strength": 1,
              "angle": 0.526,
              "maxBounces": 1024
            }
          ]
        },
        {
          "_$id": "7p5brpee",
          "_$prefab": "b18f79e1-968e-4bff-a58f-a587e172bf98",
          "name": "SM_Env_Grass_01",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0,
              "z": 3.8974720958916222
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 200,
              "y": 200,
              "z": 200
            }
          },
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "8fck6xnc",
          "_$prefab": "b18f79e1-968e-4bff-a58f-a587e172bf98",
          "name": "SM_Env_Grass_01(1)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -10,
              "y": 0,
              "z": 3.8974720958916222
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 200,
              "y": 200,
              "z": 200
            }
          },
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "cs1g8h4h",
          "_$prefab": "b18f79e1-968e-4bff-a58f-a587e172bf98",
          "name": "SM_Env_Grass_01(2)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -10,
              "y": 0,
              "z": 13.897472095891622
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 200,
              "y": 200,
              "z": 200
            }
          },
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "prpgx9rf",
          "_$prefab": "b18f79e1-968e-4bff-a58f-a587e172bf98",
          "name": "SM_Env_Grass_01(3)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 10,
              "y": 0,
              "z": 13.897472095891622
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 200,
              "y": 200,
              "z": 200
            }
          },
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "vwadacfz",
          "_$prefab": "b18f79e1-968e-4bff-a58f-a587e172bf98",
          "name": "SM_Env_Grass_01(4)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 10,
              "y": 0,
              "z": 3.8974720958916222
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 200,
              "y": 200,
              "z": 200
            }
          },
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "iaiklof2",
          "_$prefab": "b18f79e1-968e-4bff-a58f-a587e172bf98",
          "name": "SM_Env_Grass_01(5)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0,
              "z": 13.897472095891622
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 200,
              "y": 200,
              "z": 200
            }
          },
          "_$child": [
            {
              "_$override": "#44",
              "_$comp": [
                {
                  "_$override": "MeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$uuid": "ecf03fe8-78b4-4e06-8164-a032535fba1d",
                      "_$type": "Material"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}