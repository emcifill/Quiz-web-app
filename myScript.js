$(document).ready(function() {
    var textArray = [];
    textArray[0] = 'Q.1: What is the supreme law of the land?';
    textArray[1] = 'A.1: the Constitution';
    textArray[2] = 'Q.2: What does the Constitution do?';
    textArray[3] = 'A.2: sets up the government, defines the government, protects basic rights of Americans';
    textArray[4] = 'Q.3: The idea of self-government is in the first three words of the Constitution. What are these words?';
    textArray[5] = 'A.3: We the People';
    textArray[6] = 'Q.4: What is an amendment?';
    textArray[7] = 'A.4: a change (to the Constitution), an addition (to the Constitution)';
    textArray[8] = 'Q.5: What do we call the first ten amendments to the Constitution?';
    textArray[9] = 'A.5: the Bill of Rights';
    textArray[10] = 'Q.6: What is one right or freedom from the First Amendment?';
    textArray[11] = 'A.6: speech, religion, assembly, press, petition the government';
    textArray[12] = 'Q.7: How many amendments does the Constitution have?';
    textArray[13] = 'A.7: 27';
    textArray[14] = 'Q.8: What did the Declaration of Independence do?';
    textArray[15] = 'A.8: announced our independence , declared our independence (from Great Britain), said that the United States is free (from Great Britain)';
    textArray[16] = 'Q.9: What are two rights in the Declaration of Independence?';
    textArray[17] = 'A.9: life, liberty, pursuit of happiness';
    textArray[18] = 'Q.10: What is freedom of religion?';
    textArray[19] = 'A.10: You can practice any religion, or not practice a religion.';



    var idx = 0;
    $('input#click').on('click', function() {
        idx++;
        var newidx = idx % textArray.length;
        $('h1#test').slideUp(100).slideDown(100).text(textArray[newidx]);
    });


    $('#click').on('click', function() {
        var currentText = $('#click').val();
        if (currentText === 'Reveal') {
            $('#click').val(' Next ');
        } else {
            $('#click').val('Reveal');
        }
    });
});