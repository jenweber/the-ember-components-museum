import Controller from '@ember/controller';

export default Controller.extend({
    presenterModeOn: "off",
    togglePresenter() {
        newVal = this.presenterModeOn === "off" ? "on" : "off";
        this.set('presenterModeOn', newVal)
    }
})
