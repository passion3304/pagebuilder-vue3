import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

//--------------------------
// Heroes
//--------------------------
const heroes = ref([
    {
        uuid: uuidv4(),
        type: 'hero',
        model: 'image-left',
        componentName: 'HeroImageLeft',
        optionsComponentName: 'HeroImageLeftOptions',
        description: 'Image left',
        thumbUrl: '/images/thumbs/v1/heroes/image-right.png',
        data: {
            darkMode: true,
            title: 'Venda todo dia usando o Facebook ADS!!!',
            subtitle: 'Voce precisa desse ebook se quiser vender no Facebook!!!',
            imageUrl: 'https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png',
            buttonText: 'Comprar Agora!!!',
            buttonLink: 'https://google.com',
        }
    },
    {
        uuid: uuidv4(),
        type: 'hero',
        model: 'form-left',
        componentName: 'HeroFormLeft',
        optionsComponentName: 'HeroFormLeftOptions',
        description: 'Form left',
        thumbUrl: '/images/thumbs/v1/heroes/form-right.png',
        data: {
            darkMode: true,
            title: 'O melhor Ebook do Brasil sobre Facebook Ads!',
            subtitle: 'Voce precisa desse ebook se quiser vender no Facebook!!!',
            buttonText: 'I want a copy!!!',
        }
    },
    {
        uuid: uuidv4(),
        type: 'hero',
        model: 'video-center',
        componentName: 'HeroVideoCenter',
        optionsComponentName: 'HeroVideoCenterOptions',
        description: 'Video center',
        thumbUrl: '/images/thumbs/v1/heroes/video-center.png',
        data: {
            darkMode: true,
            title: 'Venda todo dia usando o Facebook ADS!!!',
            subtitle: 'Voce quer vender todos os dias usando o facebook Ads? Então voce precisa desse esbook!!!',
            videoEmbed: 'https://www.youtube.com/embed/ZuxaFHe5-20',
        }
    },
])

//--------------------------
// Features
//--------------------------
const features = ref([
    {
        uuid: uuidv4(),
        type: 'features',
        model: 'grid-4',
        componentName: 'FeaturesGrid4',
        optionsComponentName: 'FeaturesGrid4Options',
        description: 'Grid 4x1',
        thumbUrl: '/images/thumbs/v1/features/grid-4.png',
        data: {
            darkMode: true,
            title: 'Os benefícios do seu produto aqui',
            list: [
                {
                    uuid: uuidv4(),
                    title: 'Features 1',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 2',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 3',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 4',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 5',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 6',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 7',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
                {
                    uuid: uuidv4(),
                    title: 'Features 8',
                    description: 'Description of features 1 should go here, ideally no more than 50 lines'
                },
            ]
        }
    },
])

//--------------------------
// Authors
//--------------------------
const authors = ref([
    {
        uuid: uuidv4(),
        type: 'author',
        model: 'image-left',
        componentName: 'AuthorImageLeft',
        optionsComponentName: 'AuthorImageLeftOptions',
        description: 'Image Left',
        thumbUrl: '/images/thumbs/v1/authors/image-left.png',
        data: {
            darkMode: true,
            title: 'About the author',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, itaque doloribus earum nostrum iste nesciunt excepturi neque eius, numquam alias eos, delectus quo illum eaque consequuntur consectetur! Sequi soluta porro, magni possimus a tempore quas rem commodi aut pariatur quaerat natus sunt, nihil voluptate maxime beatae atque assumenda similique!',
            imageUrl: '/images/blocks/v1/authors/sample.jpg'
        }
    },
])

//--------------------------
// Buy button
//--------------------------
const buy = ref([
    {
        uuid: uuidv4(),
        type: 'buy',
        model: 'simple',
        componentName: 'BuySimple',
        optionsComponentName: 'BuySimpleOptions',
        description: 'Simple',
        thumbUrl: '/images/thumbs/v1/buy/simple.png',
        data: {
            darkMode: true,
            title: 'Disponível por tempo limitado!',
            subtitle: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 7 dias por semana automaticamente enquanto vocẽ dorme.',
            buttonLink: 'https://google.com',
            buttonText: 'Comprar Agora!!!',
        }
    },
])

//--------------------------
// Buy button
//--------------------------
const faq = ref([
    {
        uuid: uuidv4(),
        type: 'faq',
        model: 'list',
        componentName: 'FAQList',
        optionsComponentName: 'FAQListOptions',
        description: 'List',
        thumbUrl: '/images/thumbs/v1/faq/list.png',
        data: {
            darkMode: false,
            title: 'Dúvidas mais Frequentes',
            list: [
                {
                    uuid: uuidv4(),
                    question: 'Question 1 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 2 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 3 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 4 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 5 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
            ]
        }
    },
    {
        uuid: uuidv4(),
        type: 'faq',
        model: 'collapse',
        componentName: 'FAQCollapse',
        optionsComponentName: 'FAQCollapseOptions',
        description: 'Collapse',
        thumbUrl: '/images/thumbs/v1/faq/collapse.png',
        data: {
            darkMode: false,
            title: 'Dúvidas mais Frequentes',
            list: [
                {
                    uuid: uuidv4(),
                    question: 'Question 1 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 2 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 3 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 4 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
                {
                    uuid: uuidv4(),
                    question: 'Question 5 goes here',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                },
            ]
        }
    },
])

//--------------------------
// Guarantees
//--------------------------
const guarantees = ref([
    {
        uuid: uuidv4(),
        type: 'guarantee',
        model: '7-days',
        componentName: 'Guarantee7Days',
        optionsComponentName: 'Guarantee7DaysOptions',
        description: '7 Days',
        thumbUrl: '/images/thumbs/v1/guarantee/7-days.png',
        data: {
            darkMode: false,
            title: 'Garantia Incondicional de 7 Dias',
            description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 7 dias por semana automaticamente enquanto vocẽ dorme.',
            imageUrl: '/images/blocks/v1/guarantee/7-days.png',
        }
    },
    {
        uuid: uuidv4(),
        type: 'guarantee',
        model: '10-days',
        componentName: 'Guarantee10Days',
        optionsComponentName: 'Guarantee10DaysOptions',
        description: '10 Days',
        thumbUrl: '/images/thumbs/v1/guarantee/10-days.png',
        data: {
            darkMode: false,
            title: 'Garantia Incondicional de 10 Dias',
            description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 10 dias por semana automaticamente enquanto vocẽ dorme.',
            imageUrl: '/images/blocks/v1/guarantee/10-days.png',
        }
    },
    {
        uuid: uuidv4(),
        type: 'guarantee',
        model: '15-days',
        componentName: 'Guarantee15Days',
        optionsComponentName: 'Guarantee15DaysOptions',
        description: '15 Days',
        thumbUrl: '/images/thumbs/v1/guarantee/15-days.png',
        data: {
            darkMode: false,
            title: 'Garantia Incondicional de 15 Dias',
            description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 15 dias por semana automaticamente enquanto vocẽ dorme.',
            imageUrl: '/images/blocks/v1/guarantee/15-days.png',
        }
    },
    {
        uuid: uuidv4(),
        type: 'guarantee',
        model: '30-days',
        componentName: 'Guarantee30Days',
        optionsComponentName: 'Guarantee30DaysOptions',
        description: '30 Days',
        thumbUrl: '/images/thumbs/v1/guarantee/30-days.png',
        data: {
            darkMode: false,
            title: 'Garantia Incondicional de 30 Dias',
            description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 30 dias por semana automaticamente enquanto vocẽ dorme.',
            imageUrl: '/images/blocks/v1/guarantee/30-days.png',
        }
    },
])

export default {
    heroes,
    features,
    authors,
    buy,
    guarantees,
    faq,
}
