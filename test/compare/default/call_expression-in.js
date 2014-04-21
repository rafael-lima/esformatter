foo();

bar(1,'dolor');
ipsum(3,{amet:true},'foo');

dolor=foo(2)

// should not remove line breaks
foo(a,b,
c,d)


// it should indent chained calls if there is a line break between each call
foo.bar()
                // comment
                .ipsum()
.dolor();

function foo() {
dolor
    // comment
    .amet()
                .maecennas();
}

contents = this.headers.next()
  .removeClass("ui-helper-reset ui-widget-content ui-corner-bottom " +
    "ui-accordion-content ui-accordion-content-active ui-state-disabled")
  .css("display", "")
  .removeAttr("role");

returned.promise().done(foo)
// comment
.done(newDefer.resolve)
.fail(newDefer.reject)
// comment
.progress(newDefer.notify);


// issue #68
define(function() {
    // line comment
    x;
});


noArgs(
      );

noArgs2(    );
noArgs3();


indent(
'foo'
);

// only indent if argument starts on next line
indent2({
dolor: 123
});
