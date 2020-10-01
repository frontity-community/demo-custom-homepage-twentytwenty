const settings = {
  "name": "frontity-codesandobox-twentytwenty",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Sample Page",
              "/sample-page/"
            ],
            [
              "The New UMoMA Opens its Doors",
              "/the-new-umoma-opens-its-doors-2/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://app-5f579d63c1ac180394b7c3da.closte.com/wp-json",
          "homepage": "/about"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
