<!-- eslint-disable -->
<template>
	<div class="container">
		<div>
			<Logo />
			<h1 class="title">Perfil do Marcos</h1>
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
import defaultConfigVueQuick from '~/assets/default-config-chat.js'
export default {
    components: {
        Chat
    },
    data() {
        return {
            // Dados Trabalhados
            chatTitle: 'Chat',
            myself: {
                name: 'Marcos',
                id: 1
            },
            participants: [
                {
                    name: 'João',
                    id: 2
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

    },
    methods: {
        onMessageSubmit(message) {
            this.messages.push(message);
        },
    }
}
</script>