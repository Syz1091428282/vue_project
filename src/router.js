import VueRouter from 'vue-router'

var router = new VueRouter({
    routes: [
        ["es2015", { "modules": false }]
    ],
    "plugins": [["component", [
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]]
    ]
})

export default router