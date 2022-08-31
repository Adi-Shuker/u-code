$.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
        const source = $("#peoples-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ peoples: data.results });
        $(".peoples").empty();
        $(".peoples").append(newHTML);
        console.log(data.results);
    },
});
