import React from 'react'

import { PencilLine } from "phosphor-react"

import styles from "./Sidebar.module.css"
import Avatar from './Avatar'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" 
            />

            <div className={styles.profile}>
                <Avatar 
                    src="https://64.media.tumblr.com/eff450b860c3f2c2fb6006cd754ae49c/c3d375d01875d8c6-8a/s1280x1920/b0ae516254203f1d4015061377b5044d0fd8a9d7.jpg"/>
                <strong>Michaelle Oliveira</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar