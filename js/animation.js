/**
 *
 * Created by fangguoliang on 15-8-1.
 */

//animatie queue;

var Show = {
    "page0":[
        {
            dom :".main",
            animate :"bg1",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".index",
            animate :"show",
            hide :true,
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomDown",
            hide :true,
            delay : 0
        },
        {
            dom :".txt1",
            animate :"duangduang shortAnimat",
            hide :true,
            delay : 700
        },

        {
            dom :".txt2",
            animate :"duangduang shortAnimat",
            hide :true,
            delay : 1300
        },
        {
            dom :".main",
            animate :"bg1 shakebody",
            delay : 1000
        },

        {
            dom :".main",
            animate :"bg1",
            delay : 1200
        },

        {
            dom :".main",
            animate :"bg1 shakebody",
            delay : 1600
        },
        /*{
            dom :".ani-txt2",
            animate :"zoomOutBig longani infinite",
            hide :true,
            delay : 1800
        },
        {
            dom :".ani-txt3",
            animate :"zoomOutBig longani infinite",
            hide :true,
            delay : 2000
        },*/
        {
            dom :".scan",
            animate :"zoomIn",
            hide :true,
            delay : 1500
        },
        {
            dom :".scanlight",
            animate :"lightani  longani infinite",
            hide :true,
            delay : 1500
        },
        {
            dom :".finger",
            animate :" scanani  longani infinite",
            hide :true,
            delay : 1500
        },
        {
            dom :".btn",
            animate :" fadeIn",
            hide :true,
            delay : 1500
        }
    ],
    "page1":[
        {
            dom :".logo",
            animate :" logoZoomIn",
            delay : 0
        },
        {
            dom :".main",
            animate :"bg2",
            delay : 0
        },
        {
            dom :".page1",
            animate : "show",
            hide :true,
            delay :0
        },
        {
            dom :".companyLink",
            animate : "fadeIn",
            hide :true,
            delay :300
        },
        {
            dom :".personalLink",
            animate : "fadeIn",
            hide :true,
            delay :500
        }
    ],
    "page2":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :" logoZoomOut",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"fadeIn",
            delay : 0
        },
        {
            dom :".page2",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".best-award",
            hide :true,
            animate :"zoomIn",
            delay : 0
        },
        {
            dom :".award-title",
            hide :true,
            animate :"zoomIn",
            delay : 50
        },
        {
            dom :".award-txt",
            hide :true,
            animate :"zoomIn",
            delay : 100
        }
    ],
    "page2plus":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"fadeIn",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".page2plus",
            animate :"show",
            hide : true,
            delay : 0
        },
        {
            dom :".page2plus-old-title",
            animate :"fadeInLeft",
            hide : true,
            delay : 100
        },
        {
            dom :".page2plus-old-box",
            animate :"fadeIn",
            hide : true,
            delay : 100
        },
        {
            dom :".page2plus-old1",
            animate :"zoomIn",
            hide : true,
            delay : 250
        },
        {
            dom :".page2plus-old2",
            animate :"zoomIn",
            hide : true,
            delay : 350
        },
        {
            dom :".page2plus-old4",
            animate :"zoomIn",
            hide : true,
            delay : 450
        },
        {
            dom :".page2plus-old3",
            animate :"zoomIn",
            hide : true,
            delay : 550
        },
        {
            dom :".page2plus-old1",
            animate :"shining shortAnimat",
            delay : 900
        },
        {
            dom :".page2plus-old2",
            animate :"shining shortAnimat",
            delay : 1200
        },
        {
            dom :".page2plus-old4",
            animate :"shining shortAnimat",
            delay : 1500
        },
        {
            dom :".page2plus-old3",
            animate :"shining shortAnimat",
            delay : 1800
        },


        {
            dom :".page2plus-arr",
            animate :"fadeInDown",
            hide : true,
            delay : 2050
        },
        {
            dom :".page2plus-new-title",
            animate :"fadeInLeft",
            hide : true,
            delay :2350
        },
        {
            dom :".page2plus-new-box",
            animate :"fadeIn",
            hide : true,
            delay : 2350
        },
        {
            dom :".page2plus-new1",
            animate :"zoomIn",
            hide : true,
            delay : 2500
        },
        {
            dom :".page2plus-new3",
            animate :"zoomIn",
            hide : true,
            delay : 2600
        },
        {
            dom :".page2plus-new5",
            animate :"zoomIn",
            hide : true,
            delay : 2700
        },
        {
            dom :".page2plus-new4",
            animate :"zoomIn",
            hide : true,
            delay : 2800
        },
        {
            dom :".page2plus-new2",
            animate :"zoomIn",
            hide : true,
            delay : 2900
        },
        {
            dom :".page2plus-new1",
            animate :"shining2 shortAnimat",
            delay : 3300
        },
        {
            dom :".page2plus-new3",
            animate :"shining2 shortAnimat",
            delay : 3600
        },
        {
            dom :".page2plus-new5",
            animate :"shining2 shortAnimat",
            delay : 3900
        },
        {
            dom :".page2plus-new4",
            animate :"shining2 shortAnimat",
            delay : 4200
        },
        {
            dom :".page2plus-new2",
            animate :"shining2 shortAnimat",
            delay : 4500
        }

    ],
    "page3":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"fadeIn",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".page3",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".organizers",
            hide :true,
            animate :"zoomIn",
            delay : 100
        },
        {
            dom :".org-title1",
            hide :true,
            animate :"fadeInUp",
            delay : 300
        },
        {
            dom :".org-txt1",
            hide :true,
            animate :"fadeInUp",
            delay : 350
        },
        {
            dom :".org-title2",
            hide :true,
            animate :"fadeInUp",
            delay : 400
        },
        {
            dom :".org-txt2",
            hide :true,
            animate :"fadeInUp",
            delay : 450
        },
        {
            dom :".org-title3",
            hide :true,
            animate :"fadeInUp",
            delay : 500
        },
        {
            dom :".org-txt3",
            hide :true,
            animate :"fadeInUp",
            delay : 550
        },
        {
            dom :".org-title4",
            hide :true,
            animate :"fadeInUp",
            delay : 600
        },
        {
            dom :".org-txt4",
            hide :true,
            animate :"fadeInUp",
            delay : 650
        }
    ],
    "page4":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".page4",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".looking-for",
            hide :true,
            animate :"zoomIn",
            delay : 0
        },
        {
            dom :".looking-title",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".looking-txt1",
            hide :true,
            animate :"fadeInUp",
            delay : 200
        },
        {
            dom :".looking-txt2",
            hide :true,
            animate :"fadeInUp",
            delay : 250
        },
        {
            dom :".looking-txt3",
            hide :true,
            animate :"fadeInUp",
            delay : 300
        },
        {
            dom :".looking-txt4",
            hide :true,
            animate :"fadeInUp",
            delay : 350
        },
        {
            dom :".looking-txt5",
            hide :true,
            animate :"fadeInUp",
            delay : 400
        },
        {
            dom :".looking-txt6",
            hide :true,
            animate :"fadeInUp",
            delay : 450
        },
        {
            dom :".looking-txt7",
            hide :true,
            animate :"fadeInUp",
            delay : 500
        },
        {
            dom :".looking-btn",
            hide :true,
            animate :"fadeIn",
            delay : 500
        }

    ],
    "page5":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".page5",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".zan-board",
            hide :true,
            animate :"zoomIn",
            delay : 0
        },
        {
            dom :".zan-btn",
            hide :true,
            animate :"fadeIn",
            delay : 200
        },
        {
            dom :".charts-btn",
            hide :true,
            animate :"fadeIn",
            delay : 300
        },
        {
            dom :".zan-info",
            hide :true,
            animate :"zoomIn",
            delay : 400
        }
    ],
    "page6":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".page6",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".chartsBox",
            hide :true,
            animate :"zoomIn",
            delay : 0
        },
        /*
        {
            dom :".chartsTitle",
            hide :true,
            animate :"zoomIn",
            delay : 800
        },
        {
            dom :".chartsList",
            hide :true,
            animate :"zoomIn",
            delay : 800
        },
        */
        {
            dom :".chartsArr",
            hide :true,
            animate :"fadeIn",
            delay : 200
        },
        {
            dom :".charts-goback",
            hide :true,
            animate :"fadeIn",
            delay : 250
        }
    ],
    "page7":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".page7",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".personal-invite",
            hide :true,
            animate :"fadeIn",
            delay : 0
        },
        {
            dom :".personal-invite-btn",
            hide :true,
            animate :"fadeIn",
            delay : 0
        }
    ],
    "page8":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".page8",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"fadeIn",
            hide :true,
            delay : 0
        },
        {
            dom :".tagList-arr",
            animate :"fadeIn",
            hide :true,
            delay : 0
        },
        {
            dom :".tagsList",
            hide :true,
            animate :"fadeIn",
            delay : 0
        }
    ],
    "page9":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".page9",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".personal",
            hide :true,
            animate :"zoomIn",
            delay : 0
        },
        {
            dom :".personal-who",
            hide :true,
            animate :"fadeIn",
            delay : 0
        },
        {
            dom :".personal-word",
            hide :true,
            animate :"fadeIn",
            delay :50
        },
        {
            dom :".personal-icon",
            hide :true,
            animate :"fadeIn",
            delay : 100
        },
        {
            dom :".personal-btn",
            hide :true,
            animate :"zoomIn",
            delay : 150
        },
        {
            dom :".personal-info",
            hide :true,
            animate :"zoomIn",
            delay : 200
        }
    ],

    "page10":[
        {
            dom :".main",
            animate :"bg3",
            delay : 0
        },
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay : 0
        },
        {
            dom :".page10",
            hide :true,
            animate :"show",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".invite",
            hide :true,
            animate :"fadeIn",
            delay : 0
        },
        {
            dom :".invite-btn",
            hide :true,
            animate :"fadeIn",
            delay : 0
        }
    ]
};
var Hide = {
    "page0":[
        {
            dom :".txt1",
            animate :" fadeOut",
            delay : 0
        },
        {
            dom :".txt2",
            animate :" zoomOut",
            delay : 0
        },
        {
            dom :".scan",
            animate :" fadeOut",
            delay : 0
        },
        {
            dom :".btn",
            animate :" fadeOut",
            delay : 0
        },
        {
            dom :".index",
            animate : "none",
            delay :500
        }
    ],
    "page1":[
        {
            dom :".logo",
            animate :"logoZoomOut",
            delay :0
        },
        {
            dom :".companyLink",
            animate : "fadeOut",
            delay :0
        },
        {
            dom :".personalLink",
            animate : "fadeOut",
            delay :100
        },
        {
            dom :".page1",
            animate : "none",
            delay :400
        }
    ],
    "page2":[
        {
            dom :".best-award",
            animate :"fadeOut",
            delay : 100
        },

        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        },
        {
            dom :".award-title",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".award-txt",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".page2",
            animate :"none",
            delay : 400
        }
    ],
    "page2plus":[
        {
            dom :".page2plus",
            animate :"none",
            delay : 400
        },
        {
            dom :".page2plus-old-title",
            animate :"fadeOutLeftBig",
            delay : 0
        },
        {
            dom :".page2plus-old-box",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".page2plus-old1",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".page2plus-old2",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".page2plus-old4",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".page2plus-old3",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".page2plus-arr",
            animate :"fadeOutDown",
            delay : 0
        },
        {
            dom :".page2plus-new-title",
            animate :"fadeOutLeftBig",
            delay :100
        },
        {
            dom :".page2plus-new-box",
            animate :"zoomOut",
            delay : 100
        },
        {
            dom :".page2plus-new1",
            animate :"zoomOut",
            delay : 100
        },
        {
            dom :".page2plus-new3",
            animate :"zoomOut",
            delay : 100
        },
        {
            dom :".page2plus-new5",
            animate :"zoomOut",
            delay : 100
        },
        {
            dom :".page2plus-new4",
            animate :"zoomOut",
            delay : 100
        },
        {
            dom :".page2plus-new2",
            animate :"zoomOut",
            delay : 100
        }
    ],
    "page3":[
        {
            dom :".page3",
            animate :"none",
            delay : 300
        },
        {
            dom :".organizers",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".org-title1",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-txt1",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-title2",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-txt2",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-title3",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-txt3",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-title4",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".org-txt4",
            animate :"fadeOut",
            delay : 0
        }
    ],
    "page4":[
        {
            dom :".page4",
            animate :"none",
            delay : 500
        },
        {
            dom :".looking-for",
            animate :"zoomOut",
            delay : 200
        },
        {
            dom :".looking-title",
            animate :"show",
            delay : 0
        },
        {
            dom :".looking-txt1",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-txt2",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-txt3",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-txt4",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-txt5",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-txt6",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-txt7",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".looking-btn",
            animate :"fadeOut",
            delay : 100
        }
    ],
    "page5":[
        {
            dom :".page5",
            animate :"none",
            delay : 1200
        },
        {
            dom :".zan-board",
            animate :"zoomOut",
            delay : 0
        },
        {
            dom :".zan-btn",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".charts-btn",
            animate :"fadeOut",
            delay : 100
        },
        {
            dom :".zan-info",
            animate :"zoomOut",
            delay : 100
        }
    ],
    "page6":[
        {
            dom :".page6",
            animate :"none",
            delay : 600
        },
        {
            dom :".chartsBox",
            animate :"zoomOut",
            delay : 300
        },
        {
            dom :".chartsTitle",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".chartsList",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".chartsArr",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".charts-goback",
            animate :"fadeOut",
            delay : 0
        }
    ],
    "page7":[
        {
            dom :".page7",
            animate :"none",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        }
    ],

    "page8":[
        {
            dom :".page8",
            animate :"none",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".tagList-arr",
            animate :"fadeOut",
            delay : 0
        }

    ],
    "page9":[
        {
            dom :".page9",
            animate :"none",
            delay : 500
        },
        {
            dom :".personal",
            animate :"zoomOut",
            delay : 300
        },
        {
            dom:".tagsList",
            animate :"fadeOut",
            delay:0
        },
        {
            dom :".personal-who",
            animate :"fadeOut",
            delay : 0
        },
        {
            dom :".personal-word",
            animate :"fadeOut",
            delay : 100
        },
        {
            dom :".personal-icon",
            animate :"fadeOut",
            delay : 100
        },
        {
            dom :".personal-btn",
            animate :"zoomOut",
            delay : 100
        },
        {
            dom :".personal-info",
            animate :"zoomOut",
            delay : 100
        }
    ],
    "page10":[
        {
            dom :".page10",
            animate :"none",
            delay : 0
        },
        {
            dom :".pagaBtn",
            animate :"none",
            delay : 0
        }
    ]
};

