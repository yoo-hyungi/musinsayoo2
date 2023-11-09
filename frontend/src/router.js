
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderOrderManager from "./components/listers/OrderOrderCards"
import OrderOrderDetail from "./components/listers/OrderOrderDetail"

import DeliveryDeliveryManagementManager from "./components/listers/DeliveryDeliveryManagementCards"
import DeliveryDeliveryManagementDetail from "./components/listers/DeliveryDeliveryManagementDetail"

import ClothInventoryManager from "./components/listers/ClothInventoryCards"
import ClothInventoryDetail from "./components/listers/ClothInventoryDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders/orders',
                name: 'OrderOrderManager',
                component: OrderOrderManager
            },
            {
                path: '/orders/orders/:id',
                name: 'OrderOrderDetail',
                component: OrderOrderDetail
            },

            {
                path: '/deliveries/deliveryManagements',
                name: 'DeliveryDeliveryManagementManager',
                component: DeliveryDeliveryManagementManager
            },
            {
                path: '/deliveries/deliveryManagements/:id',
                name: 'DeliveryDeliveryManagementDetail',
                component: DeliveryDeliveryManagementDetail
            },

            {
                path: '/cloths/inventories',
                name: 'ClothInventoryManager',
                component: ClothInventoryManager
            },
            {
                path: '/cloths/inventories/:id',
                name: 'ClothInventoryDetail',
                component: ClothInventoryDetail
            },




    ]
})
