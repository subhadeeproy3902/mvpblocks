export function generateThankYouEmail({
  orderId,
  paymentId,
  productName,
  downloadUrl,
  currency = 'USD',
  amount = '49.00',
}: {
  orderId: string;
  paymentId: string;
  productName: string;
  downloadUrl: string;
  currency?: string;
  amount?: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Purchase</title>
    <style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
    padding: 20px;
}

.email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.header {
    background-color: #e91e63;
    color: white;
    padding: 40px 30px;
    text-align: center;
}

.header h1 {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 600;
}

.header p {
    font-size: 16px;
    opacity: 0.9;
}

.content {
    padding: 40px 30px;
}

.order-details {
    background-color: #fafafa;
    border-radius: 6px;
    padding: 25px;
    margin-bottom: 30px;
    border-left: 3px solid #e91e63;
}

.order-details h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eeeeee;
}

.detail-row:last-child {
    border-bottom: none;
}

.detail-label {
    font-weight: 600;
    color: #666;
    font-size: 14px;
}

.detail-value {
    font-weight: 500;
    color: #333;
    text-align: right;
}

.product-title {
    color: #e91e63;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.product-title:hover {
    color: #c2185b;
    text-decoration: underline;
}

.cost-highlight {
    font-size: 18px;
    font-weight: 700;
    color: #e91e63;
}

.message {
    background-color: #fdf2f8;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 30px;
    border-left: 3px solid #f8bbd9;
}

.message p {
    color: #555;
    font-size: 15px;
    line-height: 1.5;
}

.footer {
    background-color: #fafafa;
    padding: 20px 30px;
    text-align: center;
    border-top: 1px solid #eeeeee;
}

.footer p {
    font-size: 12px;
    color: #888;
    font-style: italic;
}

.divider {
    height: 1px;
    background-color: #e91e63;
    margin: 20px 0;
}

.download-section {
    text-align: center;
    padding: 30px 20px;
    background-color: #fdf2f8;
    border-radius: 6px;
    margin-bottom: 30px;
}

.download-section h3 {
    color: #333;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 600;
}

.download-section p {
    color: #555;
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.download-btn {
    display: inline-block;
    background-color: #e91e63;
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-bottom: 15px;
}

.download-btn:hover {
    background-color: #c2185b;
}

.support-text {
    font-size: 13px !important;
    color: #888 !important;
    margin-bottom: 0 !important;
}

@media (max-width: 600px) {
    body {
        padding: 10px;
    }
    
    .header {
        padding: 30px 20px;
    }
    
    .header h1 {
        font-size: 24px;
    }
    
    .content {
        padding: 30px 20px;
    }
    
    .order-details {
        padding: 20px;
    }
    
    .detail-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    
    .detail-value {
        text-align: left;
    }
}
</style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been confirmed and is being processed</p>
        </div>
        
        <div class="content">
            <div class="message">
                <p>We're excited to let you know that your recent purchase has been successfully processed. Below are the details of your order for your records.</p>
            </div>
            
            <div class="order-details">
                <h2>Order Details</h2>
                
                <div class="detail-row">
                    <span class="detail-label">Order ID: </span>
                    <span class="detail-value">${orderId}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Payment ID: </span>
                    <span class="detail-value">${paymentId}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Product: </span>
                    <span class="detail-value">
                        <span class="product-title">${productName}</span>
                    </span>
                </div>
                
                <div class="divider"></div>
                
                <div class="detail-row">
                    <span class="detail-label">Total Cost: </span>
                    <span class="detail-value cost-highlight">${currencySymbol(currency)}${amount}</span>
                </div>
            </div>
            
            <div class="download-section">
                <h3>Access Your Purchase</h3>
                <p>Your purchase is ready for download. Click the button below to access your content immediately.</p>
                <a href="${downloadUrl}" class="download-btn">
                    Download Now
                </a>
                <p class="support-text">This link will expire in 24 hours. For any questions, contact our support team.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Please don't share this download link to maintain content security</p>
        </div>
    </div>
</body>
</html>`;
}

function currencySymbol(currency: string) {
  const symbols: Record<string, string> = {
    USD: '$',
    INR: '₹',
    EUR: '€',
    GBP: '£',
  };
  return symbols[currency.toUpperCase()] || `${currency} `;
}
