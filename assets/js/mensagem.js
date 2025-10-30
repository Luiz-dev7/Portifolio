function enviarwhats(event) {
    event.preventDefault();


    const nome = document.getElementById('nome');

    const mensagem = document.getElementById('mensagem');

    const telefone = '5511952746251'

    const texto = `Olá, me chamo ${nome.value}, ${mensagem.value}`;

    const msgFormatada = encodeURIComponent(texto)

    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    window.open(linkWhatsApp, '_blank');

}