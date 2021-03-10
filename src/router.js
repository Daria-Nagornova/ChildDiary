import { createRouter, createWebHistory } from 'vue-router'
import AddChild from "./components/ChildDiary/AddChild";
import AddNotes from "./components/ChildDiary/AddNotes";
import NotesToday from "./components/ChildDiary/NotesToday";
import Walk from "./components/ChildDiary/Category/Walk";
import Vaccination from "./components/ChildDiary/Category/Vaccination";
import Teeth from "./components/ChildDiary/Category/Teeth";
import Feeding from "./components/ChildDiary/Category/Feeding";
import Height from "./components/ChildDiary/Category/Height";
import Sleep from "./components/ChildDiary/Category/Sleep";
import ErrorPage from "./components/ErrorPage";import ChildDiary from "./components/ChildDiary/ChildDiary";


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/notesToday', component: NotesToday },
        { path: '/addChild', component: AddChild },
        { path: '/addNotes', component: AddNotes },
        { path: '/walk', component: Walk },
        { path: '/vaccination', component: Vaccination },
        { path: '/teeth', component: Teeth },
        { path: '/feeding', component: Feeding },
        { path: '/height', component: Height },
        { path: '/sleep', component: Sleep },
      //  { path: '/:notFound(.*)', component: ErrorPage }
    ]
})
