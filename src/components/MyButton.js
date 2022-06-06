import { React } from 'react'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { typography } from '../theme/typography'

const styles = {
    btn: {
        background: colors.bgBtn,
        color: colors.white,
        padding: "8px 18px",
        margin: spacing[2],
        fontSize: typography.primary,
        fontWeight: 400,
        borderRadius: 10
    }
}

export default function MyButton({ children }) {
    return (
        <button style={styles.btn}>{children}</button>
    )
}


