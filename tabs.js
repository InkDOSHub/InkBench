// Tabs: "Full tests" (capability checks) and "Benchmark" (performance scores). The last tab is remembered.
(function () {
  var buttons = document.querySelectorAll("[data-aba]");
  function show(a) {
    Array.prototype.forEach.call(buttons, function (b) { b.setAttribute("aria-selected", b.dataset.aba === a); });
    document.getElementById("aba-full").hidden = a !== "full";
    document.getElementById("aba-bench").hidden = a !== "bench";
    try { localStorage.setItem("xeos-tests-aba", a); } catch (e) {}
  }
  Array.prototype.forEach.call(buttons, function (b) { b.addEventListener("click", function () { show(b.dataset.aba); }); });
  var a = /[?&]bench\b/.test(location.search) ? "bench" : null;
  try { a = a || localStorage.getItem("xeos-tests-aba"); } catch (e) {}
  show(a === "bench" ? "bench" : "full");
})();
