/* =========================================================
   DIVINE RESTAURANT — booking.html client-side form handling
   No backend involved: on valid submit we simply show a
   success message. Nothing is sent or stored anywhere.
   ========================================================= */

(function () {
  var form = document.getElementById('booking-form');
  if (!form) return; // Only runs on booking.html

  var successBox = document.getElementById('form-success');

  var fields = {
    fullname: {
      el: document.getElementById('fullname'),
      error: document.getElementById('error-fullname'),
      validate: function (value) {
        return value.trim().length >= 2 ? '' : 'Please enter your full name.';
      }
    },
    email: {
      el: document.getElementById('email'),
      error: document.getElementById('error-email'),
      validate: function (value) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value.trim()) ? '' : 'Please enter a valid email address.';
      }
    },
    phone: {
      el: document.getElementById('phone'),
      error: document.getElementById('error-phone'),
      validate: function (value) {
        var digits = value.replace(/\D/g, '');
        return digits.length >= 7 ? '' : 'Please enter a valid phone number.';
      }
    },
    guests: {
      el: document.getElementById('guests'),
      error: document.getElementById('error-guests'),
      validate: function (value) {
        return value ? '' : 'Please select the number of guests.';
      }
    },
    date: {
      el: document.getElementById('date'),
      error: document.getElementById('error-date'),
      validate: function (value) {
        if (!value) return 'Please choose a date.';
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var chosen = new Date(value);
        return chosen >= today ? '' : 'Please choose a current or future date.';
      }
    },
    time: {
      el: document.getElementById('time'),
      error: document.getElementById('error-time'),
      validate: function (value) {
        return value ? '' : 'Please choose a time.';
      }
    }
  };

  function validateField(key) {
    var field = fields[key];
    var message = field.validate(field.el.value);
    field.error.textContent = message;
    field.el.style.borderColor = message ? '#6d1f27' : '';
    return message === '';
  }

  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    field.el.addEventListener('blur', function () {
      validateField(key);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    successBox.classList.remove('visible');

    var isValid = true;
    Object.keys(fields).forEach(function (key) {
      if (!validateField(key)) {
        isValid = false;
      }
    });

    if (!isValid) {
      var firstInvalid = Object.keys(fields).find(function (key) {
        return fields[key].error.textContent !== '';
      });
      if (firstInvalid) {
        fields[firstInvalid].el.focus();
      }
      return;
    }

    // No backend: simply confirm to the user and reset the form.
    successBox.classList.add('visible');
    successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    form.reset();
  });
})();
