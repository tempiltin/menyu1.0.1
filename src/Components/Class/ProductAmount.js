class ProductAmount{
    constructor(json) {
        Object.assign(this, json);
    }
}

const productAmount = new ProductAmount(  {
    "organizatsion": "SamBurger",
    "category": [
      {
        "name": "burger",
        "category_id": 1,
        "product": [
          {
            "product_name": "burger",
            "product_id": 1,
            "amount": [
              {
                "amount_id": 1,
                "amount": 1,
                "price": 25000
              },
              {
                "amount_id": 9,
                "amount": 0.5,
                "price": 15000
              }
            ],
            "unit": "done",
            "description": "dasfghfjm,nbvc",
            "url_photo": "https://stratappresturant.herokuapp.com/media/catigoris_logo/bif_sh_WfkaNES.jpg"
          },
          {
            "product_name": "burger2",
            "product_id": 2,
            "amount": [
              {
                "amount_id": 2,
                "amount": 0.5,
                "price": 14000
              }
            ],
            "unit": "kilogram",
            "description": "dsfgsdfv",
            "url_photo": "https://stratappresturant.herokuapp.com/media/catigoris_logo/pide_sh_b2SsJs3.jpg"
          },
          {
            "product_name": "burger3",
            "product_id": 3,
            "amount": [
              {
                "amount_id": 3,
                "amount": 1,
                "price": 23000
              }
            ],
            "unit": "kilogram",
            "description": "asdfvdwdsa",
            "url_photo": "https://stratappresturant.herokuapp.com/media/catigoris_logo/vegan_sha_VPtdP3R.jpg"
          },
          {
            "product_name": "burger4",
            "product_id": 4,
            "amount": [
              {
                "amount_id": 4,
                "amount": 1,
                "price": 23000
              }
            ],
            "unit": "porsiya",
            "description": "zcxvb nbvc cvb",
            "url_photo": "https://stratappresturant.herokuapp.com/media/catigoris_logo/mac_JjIimHT.jpeg"
          },
          {
            "product_name": "burger5",
            "product_id": 5,
            "amount": [
              {
                "amount_id": 5,
                "amount": 1.5,
                "price": 55000
              }
            ],
            "unit": "done",
            "description": "234567iuytrdfcgvbnm",
            "url_photo": "https://stratappresturant.herokuapp.com/media/catigoris_logo/kotik_PfwVKvZ.png"
          },
          {
            "product_name": "burger6",
            "product_id": 6,
            "amount": [
              {
                "amount_id": 6,
                "amount": 0.5,
                "price": 25000
              }
            ],
            "unit": "done",
            "description": "2345678itresdcvb",
            "url_photo": "https://stratappresturant.herokuapp.com/media/catigoris_logo/big__mac_Ugj84b0.jpeg"
          }
        ],
        "next_page_url": "https://stratappresturant.herokuapp.com/api/v1/org/next_page/1/1/"
      },
      {
        "name": "vegan burger",
        "category_id": 2,
        "product": [],
        "next_page_url": "https://stratappresturant.herokuapp.com/api/v1/org/next_page/2/1/"
      }
    ]
  },);

console.log(productAmount.category.product)