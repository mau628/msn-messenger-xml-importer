<template>
    <div class="screen-view">
        <header class="header"
                v-bind:data-loaded="data && !about ? 'loaded' : ''">
            <h1 class="header__title">
                <img
                    class="header__icon"
                    src="./../img/logo.png"
                    alt="MSN logo" />

                <span>MSN XML reader</span>
            </h1>

            <nav class="header__nav">
                <template v-if="data">
                    <button v-on:click="getCsv">Get CSV</button>
                    <button v-on:click="getJson">Get JSON</button>
                    <button v-on:click="reset">Reset</button>
                </template>

                <button v-on:click="about = true">About</button>
            </nav>
        </header>

        <section class="screen-view__content">
            <drag-drop
                v-if="!data && !about"
                v-on:update="parseDrop"></drag-drop>

            <chat-view
                v-if="data && !about"
                v-bind:chatMessages="data.messagesFlat"></chat-view>

            <article
                v-if="about"
                class="screen-view__about">
                <button
                    class="screen-view__link"
                    v-on:click="about = false">
                    Close
                </button>

                <p>
                    <strong>This is fork from a tool by <a href="https://www.haykranen.nl">Hay Kranen</a> to read your old MSN Messenger XML chat logs</strong>
                </p>

                <p>
                    Note that all the processing takes place on your own device.
                    No data is transferred to any server (you don't need to worry about anyone reading your cringy high school chats).
                    If you're paranoid turn off your connection, this tool will still work.
                </p>

                <p>
                    Original code is open source and can be found on Hay's <a href="https://github.com/hay/msn-messenger-xml-importer">Github</a> account.
                    This fork is also open source and can also be found on my <a href="https://github.com/mau628/msn-messenger-xml-importer">Github</a> account.
                </p>

                <p>
                    If you found this tool useful, why not <a href="https://www.haykranen.nl/donate/">support Hay's work</a>?
                    I am not receiving donations as I just performed some minor tweaks to Hay's project.
                </p>

                <a href="https://www.haykranen.nl/donate/" class="btn btn--donate">
                    <img src="./../img/icon.png" alt="MSN logo" />
                    <span>Support Hay's work</span>
                </a>
            </article>
        </section>
    </div>
</template>

<script>
    import ChatView from './chat-view.vue';
    import DragDrop from './drag-drop.vue';

    export default {
        components : { ChatView, DragDrop },

        data() {
            return {
                about : false,
                data : null
            };
        },

        methods : {
            downloadFile(data, type) {
                const blob = new Blob([ data ], { type : `text/${type}` });
                const file = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = file;
                a.download = `msn.${type}`;
                a.click();
            },

            getCsv() {
                this.downloadFile(this.data.getCsv(), 'csv');
            },

            getJson() {
                this.downloadFile(this.data.getJson(), 'json');
            },

            reset() {
                this.data = null;
            },

            async parseDrop(msnData) {
                this.data = msnData;
            }
        }
    }
</script>