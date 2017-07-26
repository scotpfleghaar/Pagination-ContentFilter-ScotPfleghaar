$(document).ready(function () {
    console.log("ready!");



    //get total number of students
    const totalStudents = $(".student-details:visible").length;

    // Returns Number of pages
    const numOfPageSelectors = (Math.ceil(totalStudents / 10));

    //Display Nothing on the page once loaded
    $('.student-item').css('display', 'none');

    //Display first ten on page load:
    //This works really well for getting the index of all the div elements and getting the range.
    $(".student-item").slice(((parseInt(1) - 1) * 10), (((parseInt(1) - 1) * 10) + 10)).css("display", "block");

    // Adds the div for the pages after all students
    $('.student-list').after('<div class="pagination"></div>')

    // Adds the Page selection elements at the bottom of the document. 
    for (let i = 0; i < numOfPageSelectors; i++) {
        $('.pagination').append('<ul><li><a href="#" class="item">' + (i + 1) + '</a></li></ul> ')
    }

    //For the search element
    $('.student-item').addClass('picked')

    //Sets the first list item class to active when page loads:
    $('.item:first').addClass('active');

    //Waits for the page number to be selected
    $('.item').on('click', function () {
        //Gets the number from the actual element
        const number = $(this).text();

        //Removes all button classes
        $('a').removeClass('active');

        //Adds the class active the selected element
        $(this).addClass('active');

        //Makes Sure that all previus elements are now not being displayed
        $('.picked').css('display', 'none');

        //Here is where the money is! This slices out the div elements based on the 
        // button number that is clicked, this then displays that section of divs. 
        //This works great because it really doesn't care how many divs are left 
        // over, for example, it will display 1 remaining div or nine. 
        //Also this is what makes it very scalable.
        $('.picked').slice(((parseInt(number) - 1) * 10), (((parseInt(number) - 1) * 10) + 10)).css("display", "block");

    });

    //Lets tackle that search section:
    //My initial plan was to temporarly delete divs that did match the search criteria,
    // this would allow the page sections to still work if we had more than 10 names
    $('.headerTitle').after('<div class="student-search"><input class = "searchBox" placeholder="Search for students..."><button class="search">Search</button></div>')


    $(".search").click(function () {
        $('.student-list').children().removeClass('picked');
        $('.student-details').parent().css('display', 'none');
        var txt = $('.searchBox').val();
        $('.student-details:contains("' + txt + '")').parent().css('display', 'block').addClass('picked');
        $('.pagination').children().remove();
        var currentStudnets = $('.student-list').find('.picked').length;
        var total = (Math.ceil(currentStudnets / 10))
        for (let i = 0; i < total; i++) {
            $('.pagination').append('<ul><li><a href="#" class="item">' + (i + 1) + '</a></li></ul> ')
        }
        $('.student-item').css('display', 'none');
        $(".picked").slice(((parseInt(1) - 1) * 10), (((parseInt(1) - 1) * 10) + 10)).css("display", "block");
        $('.item:first').addClass('active');
        $('.item').on('click', function () {
            //Gets the number from the actual element
            const number = $(this).text();

            //Removes all button classes
            $('a').removeClass('active');

            //Adds the class active the selected element
            $(this).addClass('active');

            //Makes Sure that all previus elements are now not being displayed
            $('.picked').css('display', 'none');

            //Here is where the money is! This slices out the div elements based on the 
            // button number that is clicked, this then displays that section of divs. 
            //This works great because it really doesn't care how many divs are left 
            // over, for example, it will display 1 remaining div or nine. 
            //Also this is what makes it very scalable.
            $('.picked').slice(((parseInt(number) - 1) * 10), (((parseInt(number) - 1) * 10) + 10)).css("display", "block");

        });
    });


    //Further additions 
    // 1. Sort by name, and/or joined date

});
