/* jQuery Adding and Removing DOM elements examples;
Use jQuery to add and remove DOM elements with append, prepend, after, and before. */

$('.target')
    .append('<div class="child">DOM Append</div>', '<p>This is an Appended paragraph</p>' )
    .prepend('<div class="child">DOM Prepend</div>')
    .before('<div class="sibling">DOM Before</div>')
    .after('<div class="sibling">DOM After</div>')

$(".target").append('<p>(Appended paragraph)</p>')

// $(".target").remove() //

// $(".target").empty() //

// $(".filter").remove() //





