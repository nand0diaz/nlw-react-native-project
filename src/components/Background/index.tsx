import React, { ReactNode } from "react"
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import { theme } from "../../global/styles/theme"

type Props = {
    children: ReactNode
}

export function Background({children}: Props) {
    const { secondary80, secondary110 } = theme.colors

    return (
        <LinearGradient 
            style={styles.container}
            colors={[secondary80, secondary110]}
        >
            {children}
        </LinearGradient>
    )
}