<template>
    <div class="chat-view" v-if="isLoaded">
        <div class="chat-view__info">
            Displaying {{chatMessages.length}} messages
        </div>

        <ul class="chat-view__list">
            <div v-for="(msg, idx) in chatMessages" :key="idx">
                <hr v-if="msg.addbreak">
                <li :class="['chat-view__item', (msg.align == 'right' ? 'chat-view__right' : '')]">
                    <time class="chat-view__time">
                        {{msg.date}} - {{msg.time}}
                    </time>

                    <span class="chat-view__user">
                        {{msg.from}}
                    </span>

                    <p class="chat-view__text" :style="msg.text_style">
                        {{msg.text}}
                    </p>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        props : {
            chatMessages : Array
        },
        data() {
            return {
                isLoaded: false
            }
        },
        methods : {
            minutesDiff(date1, date2){
                if(date1 === "" || date2 === "") return 0;

                const d1 = new Date(date1);
                const d2 = new Date(date2);
                const diffMs = d2.getTime() - d1.getTime();
                const diffMins = Math.abs(Math.floor((diffMs / 1000) / 60));
                return diffMins;
            },
            processMessages(){
                let lastSender = "";
                let lastDateTime = "";
                let align = "left";
                let lastSessionID = -1;
                let isFirstMessage = true;

                this.chatMessages.forEach(msg => {
                    msg.addbreak = false;
                    let isSameUser = lastSender === msg.from;
                    
                    if(!isSameUser && !isFirstMessage)
                        align = align === "left" ? "right" : "left";

                    const diffMins = this.minutesDiff(msg.datetime, lastDateTime);
                    if (lastSessionID != msg.sessionid && diffMins > 60)
                    {
                        isSameUser = false;
                        align = "left";
                        msg.addbreak = !isFirstMessage;
                    }
                    msg.align = align;

                    lastSender = msg.from;
                    lastDateTime = msg.datetime;
                    lastSessionID = msg.sessionid;
                    isFirstMessage = false;
                });
                this.isLoaded = true;
            }
        },
        mounted() {
            this.processMessages();
        }
    }
</script>