<template>
    <div class="drag-drop"
         v-bind:dragover="dragover">

        <p class="drag-drop__help"  v-if="!loading">
            <img src="../img/icon.png"
                 alt="MSN icon"
                 class="drag-drop__icon" />
            <span>Drop your MSN XML file here</span>
        </p>
        <div v-else>
            <p class="drag-drop__help">
                <span>Parsing XML file...</span>
            </p>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

        <p v-show="error"
           class="drag-drop__error">{{error}}</p>
    </div>
</template>

<script>
    import { MsnXml } from '../msnxml.js';

    export default {
        data() {
            return {
                dragover : false,
                error : false,
                loading : false
            }
        },

        methods : {
            async handleDrop(e) {
                this.loading = true;
                this.dragover = false;
                e.preventDefault();

                if (!e.dataTransfer.items) {
                    return;
                }

                const items = e.dataTransfer.items;

                if (items.length > 1) {
                    this.error = 'Please only drop one file...';
                    return;
                }

                const item = items[0].getAsFile();

                if (item.type !== 'text/xml') {
                    this.error = 'Only XML files are accepted';
                    return;
                }

                // Parse and check for erros
                let data;

                try {
                    const xml = await item.text();
                    data = new MsnXml(xml);
                } catch (e) {
                    console.error(e);
                    this.error = `Parsing error: ${e}`;
                }

                this.$emit('update', data);
                this.loading = false;
            },

            initDrop() {
                this.$el.addEventListener('drop', (e) => this.handleDrop(e));

                this.$el.addEventListener('dragleave', () => {
                    this.dragover = false;
                });

                this.$el.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    this.error = false;
                    this.dragover = true;
                });
            }
        },

        mounted() {
            this.initDrop();
        }
    }
</script>