import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer GtfFIGkFoFx5rFqW9BijFRb5rO7-JmzkPb9GglcAwaqsDEH7F-zw4fKELu_j4UHj0pQZVnfseS9oJUiEDAjGn8qjwDqKkEHoskC_WbT3chq921gRLc2diNYR6uBnYnYx'
    }
});