define("qanda/templates/components/question-detail", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OAMPy+Le", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel\"],[\"static-attr\",\"style\",\"padding: 10px;border:1px solid black; border-radius:5px\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"question\",\"heading\"]],false],[\"close-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"delete\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"question\"]]]],[\"flush-element\"],[\"text\",\"Delete Question \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"posted by \"],[\"append\",[\"unknown\",[\"question\",\"author\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\\"\"],[\"append\",[\"unknown\",[\"question\",\"notes\"]],false],[\"text\",\"\\\"\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel\"],[\"static-attr\",\"style\",\"background-color: white; padding: 10px;\"],[\"flush-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"question\",\"answers\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"answer-tile\"],null,[[\"answer\",\"destroyAnswer\"],[[\"get\",[\"answer\"]],\"destroyAnswer\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"answer\"]}],\"hasPartials\":false}", "meta": { "moduleName": "qanda/templates/components/question-detail.hbs" } });
});