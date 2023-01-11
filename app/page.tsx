import { Fira_Code } from '@next/font/google'

const font = Fira_Code({
    weight: '700'
})

export default function Home() {
    return (
        <main className={font.className}>
            Главная
        </main>
    )
}