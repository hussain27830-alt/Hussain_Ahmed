// বাংলাদেশি পেমেন্ট সিস্টেম - BidSheba
document.addEventListener('DOMContentLoaded', function() {
    // ১. ভাষা পরিবর্তন সিস্টেম
    const banglaBtn = document.getElementById('bangla');
    const englishBtn = document.getElementById('english');
    
    const translations = {
        'bangla': {
            'orderSummary': 'অর্ডার সারাংশ',
            'paymentOptions': 'পেমেন্ট অপশন নির্বাচন করুন',
            'serviceAmount': 'সার্ভিস মূল্য',
            'serviceFee': 'সার্ভিস ফি (৫%)',
            'vat': 'ভ্যাট (৫%)',
            'totalAmount': 'মোট পরিমাণ',
            'paymentNote': 'দ্রষ্টব্য: পেমেন্ট এস্ক্রো সিস্টেমের মাধ্যমে নিরাপদে সংরক্ষিত থাকবে। কাজ সম্পন্ন হলে সেলার টাকা পাবেন।',
            'payWith': 'মাধ্যমে পেমেন্ট করুন',
            'instructions': 'নিচের নির্দেশাবলী অনুসরণ করুন:',
            'paymentNumber': 'পেমেন্ট নম্বর:',
            'sendAmount': 'পাঠানোর পরিমাণ:',
            'reference': 'রেফারেন্স (Reference):',
            'copy': 'কপি করুন',
            'transactionId': 'ট্রানজেকশন আইডি',
            'yourNumber': 'আপনার নম্বর',
            'terms': 'আমি স্বীকার করছি যে আমি উপরের নির্দেশনা অনুসরণ করে পেমেন্ট সম্পন্ন করেছি এবং ট্রানজেকশন আইডি সঠিকভাবে দিয়েছি।',
            'submitPayment': 'পেমেন্ট সাবমিট করুন',
            'paymentSecure': 'আপনার পেমেন্ট সম্পূর্ণ সুরক্ষিত',
            'warning': 'সতর্কতা: কখনোই অ্যাডমিন বা সেলারকে সরাসরি টাকা পাঠাবেন না। শুধুমাত্র উপরের নির্ধারিত নম্বরে পাঠান।',
            'needHelp': 'সহায়তা প্রয়োজন?',
            'quickLinks': 'দ্রুত লিঙ্ক',
            'supportedPayments': 'সাপোর্টেড পেমেন্ট',
            'copyright': '© ২০২৪ BidSheba.com - বাংলাদেশের ফ্রিল্যান্সিং মার্কেটপ্লেস। সর্বস্বত্ব সংরক্ষিত।'
        },
        'english': {
            'orderSummary': 'Order Summary',
            'paymentOptions': 'Select Payment Option',
            'serviceAmount': 'Service Amount',
            'serviceFee': 'Service Fee (5%)',
            'vat': 'VAT (5%)',
            'totalAmount': 'Total Amount',
            'paymentNote': 'Note: Payment will be securely held in escrow. Seller will receive money after work completion.',
            'payWith': 'Pay with',
            'instructions': 'Follow the instructions below:',
            'paymentNumber': 'Payment Number:',
            'sendAmount': 'Amount to Send:',
            'reference': 'Reference:',
            'copy': 'Copy',
            'transactionId': 'Transaction ID',
            'yourNumber': 'Your Number',
            'terms': 'I confirm that I have completed the payment following the instructions above and provided the correct Transaction ID.',
            'submitPayment': 'Submit Payment',
            'paymentSecure': 'Your Payment is Completely Secure',
            'warning': 'Warning: Never send money directly to admin or seller. Only send to the designated number above.',
            'needHelp': 'Need Help?',
            'quickLinks': 'Quick Links',
            'supportedPayments': 'Supported Payments',
            'copyright': '© 2024 BidSheba.com - Bangladeshi Freelancing Marketplace. All rights reserved.'
        }
    };
    
    banglaBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            englishBtn.classList.remove('active');
            changeLanguage('bangla');
        }
    });
    
    englishBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            banglaBtn.classList.remove('active');
            changeLanguage('english');
        }
    });
    
    function changeLanguage(lang) {
        const trans = translations[lang];
        
        // শিরোনাম আপডেট
        document.querySelector('.order-summary h2').innerHTML = `<i class="fas fa-shopping-cart"></i> ${trans.orderSummary}`;
        document.querySelector('.payment-section h2').innerHTML = `<i class="fas fa-credit-card"></i> ${trans.paymentOptions}`;
        
        // মূল্য বিশদ আপডেট
        document.querySelectorAll('.breakdown-item')[0].innerHTML = `<span>${trans.serviceAmount}</span><span>৳ ১৫,০০০</span>`;
        document.querySelectorAll('.breakdown-item')[1].innerHTML = `<span>${trans.serviceFee}</span><span>৳ ৭৫০</span>`;
        document.querySelectorAll('.breakdown-item')[2].innerHTML = `<span>${trans.vat}</span><span>৳ ৭৫০</span>`;
        document.querySelectorAll('.breakdown-item')[3].innerHTML = `<span><strong>${trans.totalAmount}</strong></span><span><strong>৳ ১৬,৫০০</strong></span>`;
        
        // নোট আপডেট
        document.querySelector('.order-note p').innerHTML = `<i class="fas fa-info-circle"></i> <strong>${lang === 'bangla' ? 'দ্রষ্টব্য:' : 'Note:'}</strong> ${trans.paymentNote}`;
        
        // ফর্ম হেডার আপডেট
        document.querySelectorAll('.form-header h3').forEach(header => {
            const method = header.closest('.payment-form').id.replace('-form', '');
            const methodName = method === 'bkash' ? 'bKash' : 
                              method === 'nogod' ? 'Nagad' : 'Rocket';
            header.innerHTML = `<i class="fas fa-${method === 'bkash' ? 'mobile-alt' : method === 'nogod' ? 'wallet' : 'rocket'}"></i> ${methodName} ${trans.payWith}`;
        });
        
        document.querySelectorAll('.instruction').forEach(el => {
            el.textContent = trans.instructions;
        });
        
        // পেমেন্ট তথ্য আপডেট
        document.querySelectorAll('.info-label span').forEach((label, index) => {
            const labels = [trans.paymentNumber, trans.sendAmount, trans.reference];
            if (labels[index]) {
                label.textContent = labels[index];
            }
        });
        
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.innerHTML = `<i class="far fa-copy"></i> ${trans.copy}`;
        });
        
        // ফর্ম লেবেল আপডেট
        document.querySelectorAll('.form-group label').forEach(label => {
            const input = label.getAttribute('for');
            if (input.includes('transaction')) {
                label.innerHTML = `<i class="fas fa-receipt"></i> ${trans.transactionId}`;
                label.nextElementSibling.nextElementSibling.textContent = 
                    lang === 'bangla' ? 'টাকা পাঠানোর পর আপনি যে TrxID পাবেন তা এখানে দিন' : 
                    'Enter the Transaction ID you received after sending money';
            } else if (input.includes('sender')) {
                label.innerHTML = `<i class="fas fa-user"></i> ${trans.yourNumber}`;
                label.nextElementSibling.placeholder = 
                    lang === 'bangla' ? 'যেমন: 017XXXXXXXX' : 'e.g.: 017XXXXXXXX';
            }
        });
        
        // টার্মস চেকবক্স আপডেট
        document.querySelectorAll('.checkbox-group label').forEach(label => {
            label.textContent = trans.terms;
        });
        
        // সাবমিট বাটন আপডেট
        document.querySelectorAll('.submit-btn').forEach(btn => {
            btn.innerHTML = `<i class="fas fa-paper-plane"></i> ${trans.submitPayment}`;
        });
        
        // সিকিউরিটি নোট আপডেট
        document.querySelector('.security-header h4').textContent = trans.paymentSecure;
        document.querySelector('.warning').innerHTML = 
            `<i class="fas fa-exclamation-triangle"></i>
            <strong>${lang === 'bangla' ? 'সতর্কতা:' : 'Warning:'}</strong> ${trans.warning}`;
        
        // ফুটার আপডেট
        document.querySelector('.support-info h4').innerHTML = `<i class="fas fa-headset"></i> ${trans.needHelp}`;
        document.querySelector('.quick-links h4').textContent = trans.quickLinks;
        document.querySelector('.payment-badges h4').textContent = trans.supportedPayments;
        document.querySelector('.copyright p').textContent = trans.copyright;
        
        // মডাল কন্টেন্ট আপডেট (যদি খোলা থাকে)
        if (document.querySelector('#success-modal').classList.contains('active')) {
            updateModalContent(lang);
        }
    }

    // ২. পেমেন্ট মেথড ট্যাব সিস্টেম
    const methodTabs = document.querySelectorAll('.method-tab');
    const paymentForms = document.querySelectorAll('.payment-form');
    
    methodTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const method = this.dataset.method;
            
            // সক্রিয় ট্যাব আপডেট
            methodTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // সক্রিয় ফর্ম আপডেট
            paymentForms.forEach(form => {
                form.classList.remove('active');
                form.style.display = 'none';
            });
            
            const activeForm = document.getElementById(`${method}-form`);
            activeForm.classList.add('active');
            activeForm.style.display = 'block';
            
            // ফোকাস প্রথম ইনপুটে
            const firstInput = activeForm.querySelector('input[type="text"], input[type="tel"]');
            if (firstInput) {
                firstInput.focus();
            }
        });
    });

    // ৩. কপি বাটন ফাংশনালিটি
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.dataset.number;
            const buttonText = this.innerHTML;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // কপি সফল মেসেজ
                this.innerHTML = '<i class="fas fa-check"></i> কপিড!';
                this.style.background = 'var(--success-color)';
                
                // ২ সেকেন্ড পর আগের স্ট্যাটাসে ফিরে যাওয়া
                setTimeout(() => {
                    this.innerHTML = buttonText;
                    this.style.background = 'var(--info-color)';
                }, 2000);
            }).catch(err => {
                console.error('কপি করতে ব্যর্থ: ', err);
                alert('কপি করতে ব্যর্থ হয়েছে। ম্যানুয়ালি কপি করুন।');
            });
        });
    });

    // ৪. ফর্ম ভ্যালিডেশন ও সাবমিশন
    const paymentFormsArray = ['bkash-form', 'nogod-form', 'rocket-form'];
    
    paymentFormsArray.forEach(formId => {
        const form = document.getElementById(formId);
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // ফর্ম ভ্যালিডেশন
            if (!validateForm(this)) {
                return;
            }
            
            // লোডিং স্টেট দেখানো
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> প্রসেসিং...';
            submitBtn.disabled = true;
            
            // সিমুলেটেড API কল (রিয়েল প্রজেক্টে এখানে API কল হবে)
            setTimeout(() => {
                processPayment(this);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    });
    
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            // ইনপুট ভ্যালু চেক
            if (!input.value.trim()) {
                showError(input, 'এই ফিল্ডটি পূরণ করা আবশ্যক');
                isValid = false;
            } 
            // ফোন নম্বর ভ্যালিডেশন
            else if (input.type === 'tel') {
                const phoneRegex = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
                if (!phoneRegex.test(input.value)) {
                    showError(input, 'সঠিক মোবাইল নম্বর দিন (11 বা 13 ডিজিট)');
                    isValid = false;
                } else {
                    clearError(input);
                }
            }
            // ট্রানজেকশন আইডি ভ্যালিডেশন
            else if (input.id.includes('transaction')) {
                if (input.value.length < 8) {
                    showError(input, 'ট্রানজেকশন আইডি কমপক্ষে ৮ ক্যারেক্টার হতে হবে');
                    isValid = false;
                } else {
                    clearError(input);
                }
            } else {
                clearError(input);
            }
        });
        
        // টার্মস চেকবক্স ভ্যালিডেশন
        const termsCheckbox = form.querySelector('input[type="checkbox"]');
        if (!termsCheckbox.checked) {
            const termsLabel = form.querySelector('.checkbox-group label');
            termsLabel.style.color = 'var(--danger-color)';
            termsLabel.style.fontWeight = 'bold';
            setTimeout(() => {
                termsLabel.style.color = '';
                termsLabel.style.fontWeight = '';
            }, 3000);
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        clearError(input);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'var(--danger-color)';
        errorDiv.style.fontSize = '13px';
        errorDiv.style.marginTop = '5px';
        errorDiv.style.display = 'flex';
        errorDiv.style.alignItems = 'center';
        errorDiv.style.gap = '8px';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        input.style.borderColor = 'var(--danger-color)';
        input.parentNode.appendChild(errorDiv);
        
        // ফোকাস করে স্ক্রলে নিয়ে আসা
        input.focus();
    }
    
    function clearError(input) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        input.style.borderColor = '';
    }
    
    function processPayment(form) {
        const formId = form.id;
        const transactionId = form.querySelector('input[id$="transaction"]').value;
        const senderNumber = form.querySelector('input[id$="sender"]').value;
        
        // ট্রানজেকশন আইডি মডালে সেট করা
        document.getElementById('modal-trxid').textContent = transactionId;
        
        // সফল মডাল দেখানো
        showSuccessModal(formId, transactionId, senderNumber);
        
        // ফর্ম রিসেট (ঐচ্ছিক)
        form.reset();
    }

    // ৫. সফল পেমেন্ট মডাল
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const goToDashboardBtn = document.getElementById('go-to-dashboard');
    const viewOrderBtn = document.getElementById('view-order');
    
    function showSuccessModal(paymentMethod, transactionId, senderNumber) {
        // পেমেন্ট মেথড বেজড কন্টেন্ট আপডেট
        const methodName = paymentMethod === 'bkash-form' ? 'bKash' : 
                          paymentMethod === 'nogod-form' ? 'Nagad' : 'Rocket';
        
        // অর্ডার নম্বর জেনারেট করা
        const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 8).toUpperCase();
        document.querySelector('.summary-item:nth-child(1) span:last-child').textContent = orderNumber;
        
        // ট্রানজেকশন লগ করা (রিয়েল প্রজেক্টে সার্ভারে পাঠানো হবে)
        console.log('Payment Successful:', {
            method: methodName,
            transactionId: transactionId,
            sender: senderNumber,
            amount: '৳ 16,500',
            orderNumber: orderNumber,
            timestamp: new Date().toISOString()
        });
        
        // মডাল দেখানো
        successModal.style.display = 'flex';
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function hideSuccessModal() {
        successModal.style.display = 'none';
        successModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeModalBtn.addEventListener('click', hideSuccessModal);
    
    // মডালের বাইরে ক্লিক করলে বন্ধ হওয়া
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            hideSuccessModal();
        }
    });
    
    goToDashboardBtn.addEventListener('click', function() {
        alert('ড্যাশবোর্ড পেইজে রিডাইরেক্ট করা হবে (রিয়েল ইমপ্লিমেন্টেশনে)');
        hideSuccessModal();
        // window.location.href = '/dashboard'; // রিয়েল রিডাইরেক্ট
    });
    
    viewOrderBtn.addEventListener('click', function() {
        const orderNumber = document.querySelector('.summary-item:nth-child(1) span:last-child').textContent;
        alert(`অর্ডার #${orderNumber} এর ডিটেইলস দেখানো হবে (রিয়েল ইমপ্লিমেন্টেশনে)`);
        hideSuccessModal();
        // window.location.href = `/orders/${orderNumber}`; // রিয়েল রিডাইরেক্ট
    });
    
    // ESC কী প্রেস করলে মডাল বন্ধ
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
            hideSuccessModal();
        }
    });

    // ৬. মডাল কন্টেন্ট আপডেট ফাংশন
    function updateModalContent(lang) {
        const modalTitle = document.querySelector('.modal-header h2');
        const modalMessage = document.querySelector('.modal-body p');
        const nextStepsTitle = document.querySelector('.next-steps h4');
        const nextSteps = document.querySelectorAll('.next-steps li');
        const dashboardBtn = document.getElementById('go-to-dashboard');
        const viewOrderBtn = document.getElementById('view-order');
        
        if (lang === 'english') {
            modalTitle.textContent = 'Payment Successful!';
            modalMessage.textContent = 'Your payment has been received successfully. Your order will be confirmed after admin verification.';
            nextStepsTitle.innerHTML = '<i class="fas fa-list-ol"></i> Next Steps:';
            
            nextSteps[0].textContent = 'Admin will verify payment (within 24 hours)';
            nextSteps[1].textContent = 'Seller will start work after verification';
            nextSteps[2].textContent = 'You can check order status in your dashboard';
            
            dashboardBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> Go to Dashboard';
            viewOrderBtn.innerHTML = '<i class="fas fa-eye"></i> View Order';
            
            document.querySelector('.summary-item:nth-child(1) span:first-child').textContent = 'Order Number:';
            document.querySelector('.summary-item:nth-child(2) span:first-child').textContent = 'Transaction ID:';
            document.querySelector('.summary-item:nth-child(3) span:first-child').textContent = 'Amount:';
            document.querySelector('.summary-item:nth-child(4) span:first-child').textContent = 'Status:';
            document.querySelector('.status.pending').textContent = 'Verification Pending';
        } else {
            modalTitle.textContent = 'পেমেন্ট সফল হয়েছে!';
            modalMessage.textContent = 'আপনার পেমেন্ট সফলভাবে গ্রহণ করা হয়েছে। অ্যাডমিন ভেরিফিকেশনের পর আপনার অর্ডার কনফার্ম হবে।';
            nextStepsTitle.innerHTML = '<i class="fas fa-list-ol"></i> পরবর্তী ধাপ:';
            
            nextSteps[0].textContent = 'অ্যাডমিন পেমেন্ট ভেরিফাই করবেন (২৪ ঘন্টার মধ্যে)';
            nextSteps[1].textContent = 'ভেরিফাই হলে সেলার কাজ শুরু করবেন';
            nextSteps[2].textContent = 'আপনার ড্যাশবোর্ডে অর্ডার স্ট্যাটাস চেক করতে পারবেন';
            
            dashboardBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> ড্যাশবোর্ডে যান';
            viewOrderBtn.innerHTML = '<i class="fas fa-eye"></i> অর্ডার দেখুন';
            
            document.querySelector('.summary-item:nth-child(1) span:first-child').textContent = 'অর্ডার নম্বর:';
            document.querySelector('.summary-item:nth-child(2) span:first-child').textContent = 'ট্রানজেকশন আইডি:';
            document.querySelector('.summary-item:nth-child(3) span:first-child').textContent = 'পরিমাণ:';
            document.querySelector('.summary-item:nth-child(4) span:first-child').textContent = 'স্ট্যাটাস:';
            document.querySelector('.status.pending').textContent = 'ভেরিফিকেশন পেন্ডিং';
        }
    }

    // ৭. টাইমার ফাংশন (ভেরিফিকেশন টাইমার)
    function startVerificationTimer() {
        const timerElement = document.createElement('div');
        timerElement.className = 'verification-timer';
        timerElement.style.position = 'fixed';
        timerElement.style.bottom = '20px';
        timerElement.style.right = '20px';
        timerElement.style.background = 'var(--primary-color)';
        timerElement.style.color = 'white';
        timerElement.style.padding = '15px';
        timerElement.style.borderRadius = '8px';
        timerElement.style.boxShadow = 'var(--shadow)';
        timerElement.style.zIndex = '1000';
        timerElement.style.display = 'none';
        
        timerElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-clock"></i>
                <div>
                    <div style="font-size: 12px;">ভেরিফিকেশন পেন্ডিং</div>
                    <div style="font-size: 18px; font-weight: bold;" id="timer-countdown">24:00:00</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(timerElement);
        
        // টাইমার লজিক
        let hours = 24;
        let minutes = 0;
        let seconds = 0;
        
        function updateTimer() {
            const timerDisplay = document.getElementById('timer-countdown');
            if (timerDisplay) {
                timerDisplay.textContent = 
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            // টাইমার শেষ
                            timerDisplay.textContent = 'সময় শেষ!';
                            timerDisplay.style.color = 'var(--danger-color)';
                            return;
                        }
                        hours--;
                        minutes = 59;
                    } else {
                        minutes--;
                    }
                    seconds = 59;
                } else {
                    seconds--;
                }
            }
        }
        
        // টাইমার টগল ফাংশন
        window.toggleTimer = function(show) {
            if (show) {
                timerElement.style.display = 'block';
                // টাইমার আপডেট শুরু
                window.timerInterval = setInterval(updateTimer, 1000);
            } else {
                timerElement.style.display = 'none';
                clearInterval(window.timerInterval);
            }
        };
    }
    
    // টাইমার ইনিশিয়ালাইজ
    startVerificationTimer();
    
    // ডেমো: সাবমিট বাটনে ক্লিক করলে টাইমার চালু হয়
    document.querySelectorAll('.submit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // আসলে ফর্ম ভ্যালিডেশন পাস হলে টাইমার চালু হবে
            setTimeout(() => {
                if (successModal.classList.contains('active')) {
                    window.toggleTimer(true);
                }
            }, 500);
        });
    });

    // ৮. পেমেন্ট হিস্ট্রি ট্র্যাকিং (লোকাল স্টোরেজ)
    function savePaymentToHistory(paymentData) {
        let paymentHistory = JSON.parse(localStorage.getItem('bidShebaPayments') || '[]');
        
        paymentData.id = Date.now();
        paymentData.date = new Date().toISOString();
        
        paymentHistory.unshift(paymentData); // নতুন পেমেন্ট শুরুতে যোগ
        
        // সর্বোচ্চ ৫০টি পেমেন্ট সংরক্ষণ
        if (paymentHistory.length > 50) {
            paymentHistory = paymentHistory.slice(0, 50);
        }
        
        localStorage.setItem('bidShebaPayments', JSON.stringify(paymentHistory));
        
        // নতুন পেমেন্ট নোটিফিকেশন
        showNewPaymentNotification(paymentData);
    }
    
    function showNewPaymentNotification(paymentData) {
        // রিয়েল প্রজেক্টে এটি নোটিফিকেশন সিস্টেমের অংশ হবে
        console.log('Payment saved to history:', paymentData);
    }

    // ৯. ইনপুট ফরম্যাটিং (ফোন নম্বর)
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.startsWith('880')) {
                value = value.substring(3);
            } else if (value.startsWith('0')) {
                value = value.substring(1);
            }
            
            // সর্বোচ্চ ১১ ডিজিট
            value = value.substring(0, 11);
            
            e.target.value = value;
        });
    });

    // ১০. অফলাইন ডিটেকশন ও ক্যাশে
    window.addEventListener('online', function() {
        showNotification('ইন্টারনেট কানেকশন পুনরুদ্ধার করা হয়েছে', 'success');
    });
    
    window.addEventListener('offline', function() {
        showNotification('ইন্টারনেট সংযোগ নেই। অফলাইন মোড চালু।', 'warning');
    });
    
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 20px';
        notification.style.background = type === 'success' ? 'var(--success-color)' : 'var(--warning-color)';
        notification.style.color = 'white';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = 'var(--shadow)';
        notification.style.zIndex = '9999';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.gap = '10px';
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // ৫ সেকেন্ড পর নোটিফিকেশন অপসারণ
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // ১১. পেমেন্ট মেথডের উপর ভিত্তি করে ডাইনামিক হেল্প টেক্সট
    function updateHelpTextBasedOnMethod(method) {
        const helpTexts = {
            'bkash': 'bKash অ্যাপে টাকা পাঠানোর পর আপনি যে TrxID পাবেন তা এখানে দিন',
            'nogod': 'নগদ অ্যাপে টাকা পাঠানোর পর আপনি যে Transaction ID পাবেন তা এখানে দিন',
            'rocket': 'রকেটে টাকা পাঠানোর পর আপনি যে Transaction ID পাবেন তা এখানে দিন'
        };
        
        document.querySelectorAll('.help-text').forEach(text => {
            text.textContent = helpTexts[method] || 'টাকা পাঠানোর পর আপনি যে Transaction ID পাবেন তা এখানে দিন';
        });
    }
    
    // পেমেন্ট মেথড পরিবর্তন হলে হেল্প টেক্সট আপডেট
    methodTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            updateHelpTextBasedOnMethod(this.dataset.method);
        });
    });

    // ১২. প্রিন্ট ফাংশনালিটি
    function addPrintFunctionality() {
        const printBtn = document.createElement('button');
        printBtn.className = 'print-btn';
        printBtn.innerHTML = '<i class="fas fa-print"></i> প্রিন্ট করুন';
        printBtn.style.position = 'fixed';
        printBtn.style.bottom = '20px';
        printBtn.style.left = '20px';
        printBtn.style.padding = '12px 20px';
        printBtn.style.background = 'var(--info-color)';
        printBtn.style.color = 'white';
        printBtn.style.border = 'none';
        printBtn.style.borderRadius = '8px';
        printBtn.style.cursor = 'pointer';
        printBtn.style.boxShadow = 'var(--shadow)';
        printBtn.style.zIndex = '1000';
        printBtn.style.display = 'flex';
        printBtn.style.alignItems = 'center';
        printBtn.style.gap = '8px';
        
        printBtn.addEventListener('click', function() {
            const printContent = document.querySelector('.main-content').innerHTML;
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>BidSheba - পেমেন্ট রসিদ</title>
                    <style>
                        body { font-family: 'Noto Sans Bengali', sans-serif; padding: 20px; }
                        .print-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 20px; }
                        .print-content { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                        .print-section { margin-bottom: 20px; }
                        .print-section h3 { border-bottom: 1px solid #ccc; padding-bottom: 10px; }
                        @media print {
                            .no-print { display: none; }
                        }
                    </style>
                </head>
                <body>
                    <div class="print-header">
                        <h1>BidSheba - পেমেন্ট রসিদ</h1>
                        <p>তারিখ: ${new Date().toLocaleDateString('bn-BD')}</p>
                    </div>
                    ${printContent}
                    <div class="no-print" style="margin-top: 30px; text-align: center;">
                        <p>এই রসিদটি প্রিন্ট করে সংরক্ষণ করুন</p>
                        <button onclick="window.print()" style="padding: 10px 20px; background: #2E7D32; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            প্রিন্ট করুন
                        </button>
                        <button onclick="window.close()" style="padding: 10px 20px; background: #D32F2F; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">
                            বন্ধ করুন
                        </button>
                    </div>
                </body>
                </html>
            `);
            printWindow.document.close();
        });
        
        document.body.appendChild(printBtn);
    }
    
    // প্রিন্ট বাটন যোগ
    addPrintFunctionality();

    // ১৩. কীবোর্ড শর্টকাট
    document.addEventListener('keydown', function(e) {
        // Ctrl + P (প্রিন্ট)
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            document.querySelector('.print-btn').click();
        }
        
        // Ctrl + Enter (ফর্ম সাবমিট)
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const activeForm = document.querySelector('.payment-form.active');
            if (activeForm) {
                activeForm.querySelector('.submit-btn').click();
            }
        }
        
        // ১-৩ নম্বর কী (পেমেন্ট মেথড সিলেক্ট)
        if (e.key >= '1' && e.key <= '3') {
            const index = parseInt(e.key) - 1;
            if (methodTabs[index]) {
                methodTabs[index].click();
            }
        }
    });

    // ১৪. অটো-সেভ ফাংশনালিটি (ড্রাফট সংরক্ষণ)
    let autoSaveTimer;
    
    function setupAutoSave() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="tel"]');
        
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                clearTimeout(autoSaveTimer);
                
                autoSaveTimer = setTimeout(() => {
                    saveFormDraft();
                }, 2000); // ২ সেকেন্ড পর অটো সেভ
            });
        });
    }
    
    function saveFormDraft() {
        const activeForm = document.querySelector('.payment-form.active');
        if (!activeForm) return;
        
        const formData = {
            method: activeForm.id.replace('-form', ''),
            timestamp: new Date().toISOString(),
            inputs: {}
        };
        
        activeForm.querySelectorAll('input').forEach(input => {
            if (input.type !== 'checkbox' || input.checked) {
                formData.inputs[input.id] = input.value;
            }
        });
        
        localStorage.setItem('bidShebaPaymentDraft', JSON.stringify(formData));
        
        // ড্রাফট সেভ নোটিফিকেশন (অপশনাল)
        const draftSaved = document.querySelector('.draft-saved');
        if (!draftSaved) {
            const notification = document.createElement('div');
            notification.className = 'draft-saved';
            notification.style.position = 'fixed';
            notification.style.bottom = '70px';
            notification.style.right = '20px';
            notification.style.background = 'var(--success-color)';
            notification.style.color = 'white';
            notification.style.padding = '8px 15px';
            notification.style.borderRadius = '5px';
            notification.style.fontSize = '12px';
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s';
            notification.textContent = 'ড্রাফট সংরক্ষিত হয়েছে';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '1';
                setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.parentNode.removeChild(notification);
                        }
                    }, 300);
                }, 2000);
            }, 10);
        }
    }
    
    function loadFormDraft() {
        const draft = localStorage.getItem('bidShebaPaymentDraft');
        if (!draft) return;
        
        const formData = JSON.parse(draft);
        
        // সঠিক মেথড সিলেক্ট করা
        const methodTab = document