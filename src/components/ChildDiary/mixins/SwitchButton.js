    export const switchButton = {
        data() {
            return {
                showCalendar: false,
                dateNotes: ''
            }
        },
        methods: {
            switch() {
                return this.showCalendar = !this.showCalendar
            }
        }
    }
