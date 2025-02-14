import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *   - Logo
 *   - Navbar
 * Body-Container
 *   - Search
 *   - Restorent Card Container
 *       - Resto card
 * Footer
 *    - Copyright
 *    - Contact Us
 *    - Social Media links
 */
const Logo =() => {
    return (
    <div className="logo-container">
        <img className="logo-img" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
    </div>
    )
}
const Navbar = () =>{
    return (
        <div className="nav">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    )
}
const Header =() => {
    return (
    <div className="header">
        <Logo></Logo>
        <Search />
        <Navbar></Navbar>
    </div>
    )
}
const Search =() => {
    return (
    <div className="searchbar">
       <input className="search" type="text" />
    </div>
    )
}
const resData = [
    {
        "info": {
            "id": "73434",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/9e1e8447-ae29-4a6c-9c02-51a52a6ce158_73434.jpg",
            "locality": "Baner",
            "areaName": "Baner",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "9.1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "1.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/pizza-hut-baner-rest73434",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "2243",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/18625d5b-9dc4-4c27-9bc6-a0329f3f2591_2243.JPG",
            "locality": "Park Grandeur",
            "areaName": "Balewadi",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.1,
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "18K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-13 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/subway-park-grandeur-balewadi-rest2243",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "796915",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
            "locality": "Balewadi High Street 2",
            "areaName": "Business Park",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "4961",
            "avgRatingString": "4.2",
            "totalRatingsString": "970",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/la-pinoz-pizza-balewadi-high-street-2-business-park-rest796915",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "24420",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/90e098ca-38cb-4fc8-918c-51ffdef612d2_24420.JPG",
            "locality": "Baner Road",
            "areaName": "Baner",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "15K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 00:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/dominos-pizza-road-baner-rest24420",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "560795",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/fbc3ea31-620c-4316-981e-5ef10eb463ee_560795.jpg",
            "locality": "Kalamkar Chowk",
            "areaName": "Baner",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "5.9K+",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-13 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/mcdonalds-kalamkar-chowk-baner-rest560795",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "565123",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_565123.JPG",
            "locality": "Panchshil Business Park",
            "areaName": "Baner",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "9.8K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 04:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/burger-king-panchshil-business-park-baner-rest565123",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "804128",
            "name": "Good Flippin' Burgers",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/b9508478-6464-4e02-abfd-75b65a1dcf8a_804128.jpg",
            "locality": "Shroff Suyash",
            "areaName": "Baner",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Burgers",
                "American",
                "Fast Food"
            ],
            "avgRating": 4.6,
            "parentId": "11748",
            "avgRatingString": "4.6",
            "totalRatingsString": "2.0K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/good-flippin-burgers-shroff-suyash-baner-rest804128",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "622093",
            "name": "MOJO Pizza - 2X Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/b05aba20-7b85-4e1b-b1db-2b4a492f8e2e_622093.jpg",
            "locality": "Shroff suyash mall",
            "areaName": "Baner",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "11329",
            "avgRatingString": "4.5",
            "totalRatingsString": "820",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/mojo-pizza-2x-toppings-shroff-suyash-mall-baner-rest622093",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "750287",
            "name": "Daily Kitchen - Homely Meals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/d224d177-5911-4be9-b242-4c8261d0092c_750287.JPG",
            "locality": "Shroff Suyash Mall",
            "areaName": "Baner",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Home Food",
                "Indian",
                "North Indian",
                "Thalis"
            ],
            "avgRating": 4.4,
            "parentId": "444382",
            "avgRatingString": "4.4",
            "totalRatingsString": "346",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-25 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/daily-kitchen-homely-meals-shroff-suyash-mall-baner-rest750287",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "795918",
            "name": "Olio - The Wood Fired Pizzeria",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/bbe34419-b9d0-4e44-a364-10c17324d2d8_795918.jpg",
            "locality": "Emisur",
            "areaName": "Modi SquareBuilding",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Fast Food",
                "Snacks",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "11633",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 06:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-emisur-modi-squarebuilding-rest795918",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "390127",
            "name": "NH1 Bowls - Highway To North",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/628998c7-6295-45d5-8e91-28e0e20fae87_390127.jpg",
            "locality": "Shroff suyash mall",
            "areaName": "Baner",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            "avgRating": 4.6,
            "parentId": "22452",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.1K+",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "10-20 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/nh1-bowls-highway-to-north-shroff-suyash-mall-baner-rest390127",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "681502",
            "name": "LeanCrust Pizza- ThinCrust Experts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/f08d6342-ea3d-46c1-b5fb-6ded09d7c734_681502.jpg",
            "locality": "Shroff Suyash Mall",
            "areaName": "Baner",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "11216",
            "avgRatingString": "4.5",
            "totalRatingsString": "343",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/leancrust-pizza-thincrust-experts-shroff-suyash-mall-baner-rest681502",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "27290",
            "name": "Nawab Asia",
            "cloudinaryImageId": "zkvnijkeqts3lvgj0q3m",
            "locality": "Baner",
            "areaName": "Baner",
            "costForTwo": "₹900 for two",
            "cuisines": [
                "Indian",
                "Chinese"
            ],
            "avgRating": 4.5,
            "parentId": "4171",
            "avgRatingString": "4.5",
            "totalRatingsString": "5.9K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "5.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/nawab-asia-baner-rest27290",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "639452",
            "name": "Dum Safar Biryani",
            "cloudinaryImageId": "te1dvt8tlrw2ifofobhb",
            "locality": "Shankar Kalat Nagar",
            "areaName": "Wakad",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Tandoor",
                "Indian",
                "Desserts"
            ],
            "avgRating": 3.8,
            "parentId": "351013",
            "avgRatingString": "3.8",
            "totalRatingsString": "338",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-13 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/dum-safar-biryani-shankar-kalat-nagar-wakad-rest639452",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "352818",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "d3vjnjsujsyczjcuo1it",
            "locality": "Aundh Gaon",
            "areaName": "Baner",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.7",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/grameen-kulfi-aundh-gaon-baner-rest352818",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "533215",
            "name": "Goila Butter Chicken",
            "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
            "locality": "Bhusari Colony",
            "areaName": "Regent Plaza",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Kebabs",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "322587",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.7K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/goila-butter-chicken-bhusari-colony-regent-plaza-rest533215",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "20692",
            "name": "The Quick Wok",
            "cloudinaryImageId": "cwsmscnzps1muvynelx4",
            "locality": "Prabhavee Tech Park",
            "areaName": "Baner",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese",
                "Thai",
                "Pan-Asian",
                "Healthy Food",
                "Desserts",
                "Continental",
                "DIY Meal Kits",
                "Oriental",
                "Beverages",
                "Salads"
            ],
            "avgRating": 4.1,
            "parentId": "3126",
            "avgRatingString": "4.1",
            "totalRatingsString": "13K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/the-quick-wok-prabhavee-tech-park-baner-rest20692",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "398204",
            "name": "Prem's",
            "cloudinaryImageId": "wkopwrremll2qrycplsh",
            "locality": "Baner",
            "areaName": "Baner",
            "costForTwo": "₹1000 for two",
            "cuisines": [
                "Indian",
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "161039",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-13 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "344"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/prems-baner-rest398204",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "643726",
            "name": "WeFit - Protein Bowls, Salads & Sandwiches",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/dfed39f8-6f5b-4914-9dad-c64ccad0bd42_643726.jpg",
            "locality": "Shroff suyash mall",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Keto",
                "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "355285",
            "avgRatingString": "4.6",
            "totalRatingsString": "581",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/wefit-protein-bowls-salads-and-sandwiches-shroff-suyash-mall-vashi-rest643726",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "391074",
            "name": "ZAZA Mughal Biryani",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/1f6957a2-9493-4a49-8454-d45cd00392d5_391074.jpg",
            "locality": "Shroff suyash mall",
            "areaName": "Baner",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Awadhi"
            ],
            "avgRating": 4.3,
            "parentId": "22473",
            "avgRatingString": "4.3",
            "totalRatingsString": "357",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-25 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-14 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-c73d7fc1-95b6-41b8-9050-b775117a7641"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/zaza-mughal-biryani-shroff-suyash-mall-baner-rest391074",
            "type": "WEBLINK"
        }
    }
];
const RestoCard = (props) =>{
    console.log(props);
    const { name, cuisines, costForTwo,cloudinaryImageId } = props?.restoData;
    return (
        <div className="card">
            <div className="card-img-container">
            <img className="logo-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }/>
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
        </div>
    )
}
const ResContainer = () =>{
    return (
    <div className="card-container">
        {
            resData.map((restorantData) =><RestoCard key={restorantData.info.id} restoData={restorantData.info}/>)
        }
        
        
        
    </div>
    )
}
const AppContainer =() => {
    return (
    <div className="app-container">
        <search></search>
        <ResContainer></ResContainer>
    </div>
    )
}
const AppLayout = () => {
  return  ( 
    <div className="content">
    <Header />
    <AppContainer />
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
