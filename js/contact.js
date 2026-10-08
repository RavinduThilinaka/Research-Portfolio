(function () {
  function init() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const container = document.getElementById('form-container');
      container.innerHTML = `
        <div style="text-align:center;padding:48px 0;">
          <div style="font-size:48px;margin-bottom:20px;">✅</div>
          <h3 style="font-size:20px;font-weight:700;color:#34D399;margin-bottom:12px;">Message Sent!</h3>
          <p style="font-size:14px;color:var(--text-body);line-height:1.7;">Thank you for reaching out to the PureTalk team. We will get back to you shortly.</p>
          <button id="send-another" class="btn-secondary" style="margin-top:24px;display:inline-flex;">Send Another Message</button>
        </div>
      `;
      document.getElementById('send-another').addEventListener('click', () => window.location.reload());
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();