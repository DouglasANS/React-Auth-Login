import styles from '../styles/HomeComponent.module.css'
import { CardHome2, CardHome3, CardHome4 } from './CardHomeComponent';

export default function HomeComponent() {

    return (
        <>
            <div className={styles.fundo}>
                <div className={styles.Carousel}>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/time-salvus.jpg" class="d-block w-100" className={styles.teste} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Startup Health</h5>
                                    <p>Startup investe R$ 3,5 milhões para levar internet das coisas até centenas de leitos.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="haisalvus.png" class="d-block w-100" className={styles.teste} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>HAI</h5>
                                    <p>Gestão integrada de toda jornada operacional e assistencial do atendimento domiciliar.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/ataso2.png" class="d-block w-100" className={styles.teste} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>ATAS 02</h5>
                                    <p>Gestão completa em tempo real do oxigênio medicinal.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>

            </div>



            <div className={styles.noticia}>
                <div className={styles.cards}>
                    <CardHome2 title="Aumente a produtividade da sua equipe com 
        um sistema inteligente e interativo, a HAI, HealthCare Assistive 
        Intelligence, realiza a gestão de todos os dados, além de..."/>
                </div>
                <div className={styles.cards}>
                    <CardHome4 title="O @distrito.me lançou o Inside Healthtech deste mês, 
                    com o tema Zoom: IoT na saúde. O Inside ficou excelente, pois traz um 
                    levantamento bem completo sobre.."/>
                </div>
                <div className={styles.cards}>
                    <CardHome3 title="O atendimento domiciliar vem crescendo
                     com o aumento significativo da qualidade de vida, só 
                     em 2020 cresceu 20% e poupou 21 mil leitos no sistema 
                     de saúde..."/>
                </div>
            </div>
        </>
    )
}