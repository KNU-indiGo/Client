import * as types from '../actions/actionTypes';

/* situation
    0 => 화재 없음
    1 => 진압 중
    2 => 진압 완료 */
const initialState = {
    places: [
        {
            id: 1, 
            name: "푸른병원", 
            lat: 35.876599356576506, 
            lng: 128.5889647916545, 
            address: "대구광역시 중구 태평로 102", 
            control: 2
        },
        {
            id: 2, 
            name: "홍인치과의원", 
            lat: 35.879694136720566, 
            lng: 128.59282717239168, 
            address: "대구광역시 북구 칠성남로 101", 
            control: 0
        },
        {
            id: 3, 
            name: "부부연합속내과의원", 
            lat: 35.8779667, 
            lng: 128.5835794, 
            address: "대구광역시 북구 중앙대로 528", 
            control: 1
        },
        {
            id: 4, 
            name: "정태훈내과의원", 
            lat: 35.88028526072072, 
            lng: 128.59608873820915, 
            address: "대구광역시 북구 중앙대로 522", 
            control: 0
        },
        {
            id: 5, 
            name: "우리내과의원", 
            lat: 35.87935205153737, 
            lng: 128.5977002880159, 
            address: "대구광역시 북구 칠성로 75", 
            control: 0
        },
        {
            id: 6, 
            name: "닥터굿재활의학과의원", 
            lat: 35.87166136705462, 
            lng: 128.59445795519594, 
            address: "대구광역시 중구 국채보상로 582 미도백화점",
            control: 2},
        {
            id: 7, 
            name: "곽병원", 
            lat: 35.87173091833863, 
            lng: 128.58887896079779, 
            address: "대구광역시 중구 국채보상로 531", 
            control: 1
        },
        {
            id: 8, 
            name: "대구임상병리과의원", 
            lat: 35.87399130183399, 
            lng: 128.60128149449827, 
            address: "대구광역시 중구 공평로 103", 
            control: 2
        },
    ]
}

export default function change(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_STATUS_FIRE: {
            const index = Number(action.payload - 1);
            console.log('in fire, index: ' + index);


            const newArray = [...state.places];

            newArray[index].control = 1;

            return {
                ...state,
                places: newArray,
            }
        }
        case types.CHANGE_STATUS_ONGOING: {
            const index = Number(action.payload - 1);
            console.log('in ongoing, index: ' + index);


            const newArray = [...state.places];

            newArray[index].control = 2;

            return {
                ...state,
                places: newArray,
            }
        }
        case types.CHANGE_STATUS_COMPLETE: {
            const index = Number(action.payload - 1);
            console.log('in complete, index: ' + index);

            const newArray = [...state.places];

            newArray[index].control = 0;

            return {
                ...state,
                places: newArray,
            }
        }
        default: 
            return state;
    }
}