<!-- eslint-disable -->
<template>
	<div class="container">
		<div>
			<Logo />
			<h1 class="title">Perfil do João</h1>
            <Chat 
                class="chat"
                :participants="participants"
                :myself="myself"
                :messages="messages"
                :chat-title="chatTitle"
                :placeholder="placeholder"
                :colors="colors"
                :border-style="borderStyle"
                :hide-close-button="true"
                :scroll-bottom="scrollBottom"
                :send-images="false"
                :timestamp-config="timestampConfig"
                :profile-picture-config="profilePictureConfig"
                @onMessageSubmit="onMessageSubmit"
                />
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { Chat } from 'vue-quick-chat'
import 'vue-quick-chat/dist/vue-quick-chat.css'
import { io } from 'socket.io-client'
import defaultConfigVueQuick from '~/assets/default-config-chat.js'

export default {
    components: {
        Chat
    },
    data() {
        return {
            // instanciar o Socket.io
            socket: io(),

            // Dados Trabalhados
            chatTitle: 'Chat',
            myself: {
                name: 'João',
                id: 2
            },
            participants: [
                {
                    name: 'Marcos',
                    id: 1
                }
            ],
            messages: [
                {
                    content: 'received messages',
                    myself: true,
                    participantId: 1,
                    timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
            ],
            ...defaultConfigVueQuick
        }
    },
    mounted(){
        this.$axios.$get('/ws/init')
        .then(resp =>{
            this.socket.on('receivedMsg', msg => this.onReceivedMessage(msg));
        })
    },
    methods: {
        onReceivedMessage(message){
            console.log(message);
            this.messages.push(message);
        },
        onMessageSubmit(message) {
            this.socket.emit('sendMsg', message)
            this.messages.push(message);
        },
    }
}
</script>
