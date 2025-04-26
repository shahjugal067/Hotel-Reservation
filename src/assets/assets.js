import exclusiveOfferCard1 from './img1.jpg'
import exclusiveOfferCard2 from './img2.jpg'
import exclusiveOfferCard3 from './img3.jpg'

import roomImg1 from './img4.jpg'
import roomImg2 from './img5.jpg'
import roomImg3 from './img6.jpg'
import roomImg4 from './img7.jpg'




export const cities = [
    "Kathmandu",
    "Dubai",
    "Pokhara",
    "New York",
    "London",
    "Tokyo",
];

// exclusive offer dummy data
export const exclusiveOffers = [
    {
        _id:1,
        title:'Summer Escape Package',
        description:'Experience the complementry night and daily breakfast',
        priceOff: 25,
        expiryDate:"Aug 31",
        image: exclusiveOfferCard1,
    },
    {
        _id:2,
        title:'Romantic Getaway Package',
        description:'Special couples package including spa treatments',
        priceOff: 50,
        expiryDate:"Sep 21",
        image: exclusiveOfferCard2,
    },
    {
        _id:1,
        title:'Luxurious Retreatment package',
        description:'Book 30 days in advance and save on your stay at any of our lusury Properties worldwide',
        priceOff: 40,
        expiryDate:"Sep 31",
        image: exclusiveOfferCard3,
    },

];

// testimonial dymmy data

export const testimonials =[
    {
      _id: 1,
      name: 'John Doe',
      address: 'New York, USA',
      image: 'http://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
      rating: 5,
      review: 'I have used many booking platforms before but none compare to the personalized experience here.'
    },
    {
      _id: 2,
      name: 'Sarah Johnson',
      address: 'London, UK',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=76&q=80',
      rating: 4,
      review: 'Great service and easy to use! I found exactly what I was looking for without any hassle.'
    },
    {
      _id: 3,
      name: 'Carlos Mendoza',
      address: 'Madrid, Spain',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=76&q=80',
      rating: 5,
      review: 'Absolutely amazing experience! The customer support was outstanding and very responsive.'
    },
    {
      _id: 4,
      name: 'Emily Chen',
      address: 'Toronto, Canada',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=76&q=80',
      rating: 5,
      review: 'Smooth process from start to finish. I would definitely recommend this to my friends and family.'
    },
    {
      _id: 5,
      name: 'Liam O\'Connor',
      address: 'Dublin, Ireland',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=76&q=80',
      rating: 4,
      review: 'Very satisfied! The variety of options and the detailed information made my decision easy.'
    }
  ];

  // for room Details pages
  export const roomCommonData = [
    {
        icon: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=50&q=50',
        title: 'Clean and safe stay',
        description:'a well maintained and hygenic space just for you',
    },
    {
        icon: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=50&q=50',
        title: 'Excellent Location',
        description:'All the geusts relate the rated location',
    },
    {
        icon: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=50&q=50',
        title: 'Enhance cleaning services',
        description:'a well maintained and hygenic space just for you and get cleaning clear',
    },
  ];
  // hotel dummy data 
  export const hotelDummyData = {
    '_id': 1,
    'name': 'Hotel 1',
    'address': '123 Main Street',
    'contact': '1234567890',
    'city': 'New York',
    'owner': 'John Doe',
    'createdAt': '2022-01-01T00:00:00.000Z',
    'updatedAt': '2022-01-01T00:00:00.000Z',
    '_v': 0
  }

  // room dummy data
  export const roomDummyData = [
    {
       '_id': 1,
       'hotel': hotelDummyData,
       'roomType':'Doulbe Bed',
       'pricePerNight':'400',
       'amenities':['Room Service ','Moutain View','Pool Access'],
       'images':[roomImg1,roomImg2,roomImg3,roomImg4],
       'isAvailable': true,
       'createdAt': '2022-01-01T00:00:00.000Z',
       'updatedAt': '2022-01-01T00:00:00.000Z',
       '_v': 0 
    },
    {
        '_id': 2,
        'hotel': hotelDummyData,
        'roomType': 'Single Bed',
        'pricePerNight': '250',
        'amenities': ['Free Wi-Fi', 'City View'],
        'images': [roomImg1, roomImg2],
        'isAvailable': false,
        'createdAt': '2022-02-01T00:00:00.000Z',
        'updatedAt': '2022-02-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 3,
        'hotel': hotelDummyData,
        'roomType': 'Suite',
        'pricePerNight': '800',
        'amenities': ['Private Balcony', 'Ocean View', 'Jacuzzi'],
        'images': [roomImg2, roomImg3],
        'isAvailable': true,
        'createdAt': '2022-03-01T00:00:00.000Z',
        'updatedAt': '2022-03-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 4,
        'hotel': hotelDummyData,
        'roomType': 'Twin Bed',
        'pricePerNight': '300',
        'amenities': ['Breakfast Included', 'Garden View'],
        'images': [roomImg1, roomImg4],
        'isAvailable': true,
        'createdAt': '2022-04-01T00:00:00.000Z',
        'updatedAt': '2022-04-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 5,
        'hotel': hotelDummyData,
        'roomType': 'Family Room',
        'pricePerNight': '600',
        'amenities': ['Kitchenette', 'Extra Beds', 'Play Area'],
        'images': [roomImg3, roomImg4],
        'isAvailable': false,
        'createdAt': '2022-05-01T00:00:00.000Z',
        'updatedAt': '2022-05-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 6,
        'hotel': hotelDummyData,
        'roomType': 'Deluxe King Room',
        'pricePerNight': '550',
        'amenities': ['Mini Bar', 'City Skyline View', 'Sauna Access'],
        'images': [roomImg2, roomImg4],
        'isAvailable': true,
        'createdAt': '2022-06-01T00:00:00.000Z',
        'updatedAt': '2022-06-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 7,
        'hotel': hotelDummyData,
        'roomType': 'Executive Suite',
        'pricePerNight': '1000',
        'amenities': ['Private Lounge', 'Butler Service', 'Ocean Front'],
        'images': [roomImg1, roomImg3],
        'isAvailable': true,
        'createdAt': '2022-07-01T00:00:00.000Z',
        'updatedAt': '2022-07-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 8,
        'hotel': hotelDummyData,
        'roomType': 'Economy Room',
        'pricePerNight': '150',
        'amenities': ['Free Parking', 'Shared Bathroom'],
        'images': [roomImg2],
        'isAvailable': false,
        'createdAt': '2022-08-01T00:00:00.000Z',
        'updatedAt': '2022-08-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 9,
        'hotel': hotelDummyData,
        'roomType': 'Penthouse Suite',
        'pricePerNight': '2000',
        'amenities': ['Private Pool', 'Roof Deck', 'Panoramic Views'],
        'images': [roomImg3, roomImg4],
        'isAvailable': true,
        'createdAt': '2022-09-01T00:00:00.000Z',
        'updatedAt': '2022-09-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 10,
        'hotel': hotelDummyData,
        'roomType': 'Studio Apartment',
        'pricePerNight': '450',
        'amenities': ['Kitchen', 'Work Desk', 'Pet Friendly'],
        'images': [roomImg1, roomImg2],
        'isAvailable': true,
        'createdAt': '2022-10-01T00:00:00.000Z',
        'updatedAt': '2022-10-01T00:00:00.000Z',
        '__v': 0
      }
  ];

  export const userDummyData = {
    '_id':1,
    'username':'jugal shah',
    'email':'shahjugal067@gmail.com',
    "image": roomImg1,
    'role':'hotelOwner',
    'createdAt': '2022-01-01T00:00:00.000Z',
    'updatedAt': '2022-01-01T00:00:00.000Z',
    '__v': 1,
    'recentSearchedCities':['New York']
  };

  //User booking dummy data 
  export const userBookingsDummyData = [
    {
        '_id':1,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[0],
        'checkInDate': '2022-01-01T00:00:00.000Z',
        'checkOutDate': '2022-01-05T00:00:00.000Z',
        'totalPrice': 1000,
        'guests':1,
        'status':'Pending',
        'paymentMethod':'Stripe',
        'isPaid': true,
        'createdAt': '2022-01-01T00:00:00.000Z',
        'updatedAt': '2022-01-01T00:00:00.000Z',
        '_v':0
    },
    {
        '_id': 2,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[1],
        'checkInDate': '2022-02-10T00:00:00.000Z',
        'checkOutDate': '2022-02-12T00:00:00.000Z',
        'totalPrice': 600,
        'guests': 2,
        'status': 'Confirmed',
        'paymentMethod': 'Stripe',
        'isPaid': true,
        'createdAt': '2022-02-01T00:00:00.000Z',
        'updatedAt': '2022-02-02T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 3,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[2],
        'checkInDate': '2022-03-15T00:00:00.000Z',
        'checkOutDate': '2022-03-20T00:00:00.000Z',
        'totalPrice': 1500,
        'guests': 3,
        'status': 'Cancelled',
        'paymentMethod': 'Stripe',
        'isPaid': false,
        'createdAt': '2022-03-10T00:00:00.000Z',
        'updatedAt': '2022-03-15T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 4,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[3],
        'checkInDate': '2022-04-05T00:00:00.000Z',
        'checkOutDate': '2022-04-10T00:00:00.000Z',
        'totalPrice': 1200,
        'guests': 2,
        'status': 'Pending',
        'paymentMethod': 'Stripe',
        'isPaid': true,
        'createdAt': '2022-04-01T00:00:00.000Z',
        'updatedAt': '2022-04-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 5,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[4],
        'checkInDate': '2022-05-20T00:00:00.000Z',
        'checkOutDate': '2022-05-25T00:00:00.000Z',
        'totalPrice': 2000,
        'guests': 4,
        'status': 'Confirmed',
        'paymentMethod': 'Stripe',
        'isPaid': true,
        'createdAt': '2022-05-15T00:00:00.000Z',
        'updatedAt': '2022-05-16T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 6,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[5],
        'checkInDate': '2022-06-10T00:00:00.000Z',
        'checkOutDate': '2022-06-15T00:00:00.000Z',
        'totalPrice': 1800,
        'guests': 2,
        'status': 'Pending',
        'paymentMethod': 'Stripe',
        'isPaid': false,
        'createdAt': '2022-06-01T00:00:00.000Z',
        'updatedAt': '2022-06-01T00:00:00.000Z',
        '__v': 0
      },
      {
        '_id': 7,
        'user': userDummyData,
        'hotel': hotelDummyData,
        'room': roomDummyData[6],
        'checkInDate': '2022-07-01T00:00:00.000Z',
        'checkOutDate': '2022-07-05T00:00:00.000Z',
        'totalPrice': 950,
        'guests': 1,
        'status': 'Confirmed',
        'paymentMethod': 'Stripe',
        'isPaid': true,
        'createdAt': '2022-06-25T00:00:00.000Z',
        'updatedAt': '2022-06-26T00:00:00.000Z',
        '__v': 0
      }
  ]
