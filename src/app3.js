import "./app3.css"
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click', () => {
    $square.toggleClass('active') //toggleClss没有就加上，有就移除
})