import styles from './styles.module.scss'
import Image from 'next/image'


export default function CV() {
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                {/* <div>
                    <Image priority src="/decode.png" alt="company logo" width={130} height={30} />
                </div> */}
                <div>
                    <Image priority src="/pythonrpa.png" alt="company logo" width={130} height={30} />
                    <p>
                        BPM процестерінің дамуы.
                        Негізгі стек: React, Django.
                        Жаңа клиентті бастау, трансферттер үшін шектерді орнату, басқару панелі және үлкен толтыру пішінімен жұмыс істеу процестері.
                        Мен клиент бөлігінің дамуын нөлден жаздым.
                    </p>
                </div>
                <div>
                    <Image priority src="/gocrowd.svg" alt="company logo" width={130} height={40} />
                    <p>
                        Краудфандингтік инвестициялар үшін платформа әзірленді және жүргізілді.
                        Негізгі стек болды: React, PostgreSQL, Ruby on Rails.
                        Мен сондай-ақ әртүрлі Lottie анимацияларын қолдандым, динамикалық пішіндерді жасадым, KYC/AML.
                        Қарапайым және кәсіби инвесторлар үшін сауалнама әзірледі.
                    </p>
                </div>
            </section>
        </main>
    ) 
} 