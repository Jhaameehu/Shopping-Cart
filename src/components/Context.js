import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state ={ 
        products: [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack Backpack",
                "price": 109.95,
                "description": "Your perfect pack for everyday use...",
                "category": "men clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "count":1
            },
            {
                "id": 2,
                "title": "Mens Casual Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve...",
                "category": "men clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "count":1
            },
            {
                "id": 3,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "great outerwear jackets...",
                "category": "men clothing",
                "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "count":1
            },
            {
                "id": 4,
                "title": "Mens Casual Slim Fit",
                "price": 15.99,
                "description": "great outerwear jackets......",
                "category": "men clothing",
                "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "count":1
            },
            {
                "id": 5,
                "title": "John Hardy Women's Naga Gold",
                "price": 695,
                "description": "From our Legends Collection...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "count":1
            },
            {
                "id": 6,
                "title": "Solid Gold Petite Micropave ",
                "price": 168,
                "description": "Satisfaction Guaranteed...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                "count":1
            },
            {
                "id": 7,
                "title": "White Gold Plated Princess",
                "price": 9.99,
                "description": "Classic Wedding Engagement Ring for Her...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                "count":1
            },
            {
                "id": 8,
                "title": "Pierced Owl Rose Gold",
                "price": 10.99,
                "description": "Rose Gold Flared Tunnel Plug Earrings...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                "count":1
            },
            {
                "id": 9,
                "title": "WD Elements Hard Drive - USB 3.0 ",
                "price": 64,
                "description": "USB 3.0 and Compatibility Fast data transfers...",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                "count":1
            },
            {
                "id": 10,
                "title": "SanDisk SSD PLUS 1TB",
                "price": 109,
                "description": "Easy upgrade for faster boot up...",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                "count":1
            },
            {
                "id": 11,
                "title": "Silicon Power 256GB SSD 3D",
                "price": 109,
                "description": "3D NAND flash to deliver high transfer speeds",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                "count": 1
            },
            {
                "id": 12,
                "title": "WD 4TB Gaming Hard Drive",
                "price": 114,
                "description": "Expand your PS4 gaming experience...",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
                "count": 1
            },
            {
                "id": 13,
                "title": "Acer SB220Q bi 21.5 inches",
                "price": 599,
                "description": "21. 5 inches Full HD (1920 x 1080)",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
                "count": 1

            },
            {
                "id": 14,
                "title": "Samsung 49-Inch 144Hz Monitor",
                "price": 999.99,
                "description": "49 INCH 32:9 CURVED MONITOR",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
                "count": 1

            },
            {
                "id": 15,
                "title": " Women's Snowboard Coats",
                "price": 56.99,
                "description": "Note:The Jackets is US standard size ",
                "category": "women clothing",
                "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                "count": 1

            },
            {
                "id": 16,
                "title": "Lock and Love Women's Jacket",
                "price": 29.95,
                "description": "100% POLYURETHANE(shell) 100% POLYESTER",
                "category": "women clothing",
                "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
                "count": 1

            },
            {
                "id": 17,
                "title": "Rain Jacket Women Raincoats",
                "price": 39.99,
                "description": "Lightweight perfet for trip or casual wear",
                "category": "women clothing",
                "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
                "count": 1
            },
            {
                "id": 18,
                "title": "Women's Solid Short Boat Neck V ",
                "price": 9.85,
                "description": "95% RAYON 5% SPANDEX, Made in USA",
                "category": "women clothing",
                "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                "count": 1
            },
            {
                "id": 19,
                "title": "Opna Women's   Moisture",
                "price": 7.95,
                "description": "Polyester,Machine wash, % cationic polyester",
                "category": "women clothing",
                "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                "count": 1
            },
            {
                "id": 20,
                "title": "DANVOUY Womens T Shirt Short",
                "price": 12.99,
                "description": "95%Cotton, Features: Casual, Short Sleeve",
                "category": "women clothing",
                "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                "count": 1
            }
        ],
        cart: [],
        total: 0
    };

    addCart = (id) => {
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !==id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id ===id
            })
            this.setState({cart: [...cart, ...data]})
        }else{
            alert('The product has been added to cart.')
        }
    };


    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === id) {
                item.count +=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };
    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
            if(item.id === id){
                cart.splice(index, 1)
            }
            })
            this.setState({cart: cart})
            this.getTotal();
            }
        };

        getTotal =() =>{
            const{cart} = this.state;
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count);
            },0)
            this.setState({total: res})
        };


    componentDidUpdate(){
            localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
            localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        };
    componentDidMount(){
            const dataCart = JSON.parse(localStorage.getItem('dataCart'));
            if(dataCart !== null){
                this.setState({cart: dataCart});
            }
            const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
            if(dataCart !== null){
                this.setState({total: dataTotal});
            }
    }
    render() {
        const {products, cart, total } = this.state;
        const {addCart, reduction, increase, removeProduct, getTotal} = this;
        return (
            <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

