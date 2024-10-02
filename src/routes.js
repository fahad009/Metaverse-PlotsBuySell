import MainMap from "./components/MainMap";
import Stadium from "./components/Stadium";
import GreenPavilion from "./components/GreenPavilion";
import PallaPlaza from "./components/PallaPlaza";

export default [
    {
        path: "/home",
        name: "Home",
        icon: "",
        component: MainMap,
        layout: "",
        display: false,
    },
    {
        path: "/minimap/stadium",
        name: "Stadium",
        icon: "",
        component: Stadium,
        layout: "",
        display: false,
    },
    {
        path: "/minimap/green-pavilion",
        name: "Green Pavilion",
        icon: "",
        component: GreenPavilion,
        layout: "",
        display: false,
    },
    {
        path: "/minimap/palla-plaza",
        name: "Palla Plaza",
        icon: "",
        component: PallaPlaza,
        layout: "",
        display: false,
    }
];