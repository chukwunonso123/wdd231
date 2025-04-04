document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const summaryContent = document.getElementById('summary-content');
    
    if (summaryContent) {
      // Create a container for the summary fields
      const summaryFields = document.createElement('div');
      summaryFields.className = 'summary-fields';
      
      // Add the required fields to the summary
      const requiredFields = [
        { param: 'firstName', label: 'First Name' },
        { param: 'lastName', label: 'Last Name' },
        { param: 'email', label: 'Email' },
        { param: 'phone', label: 'Phone Number' },
        { param: 'business', label: 'Business Name' },
        { param: 'membershipLevel', label: 'Membership Level' },
        { param: 'timestamp', label: 'Application Date' }
      ];
      
      requiredFields.forEach(field => {
        const value = params.get(field.param);
        if (value) {
          // Format the membership level
          let displayValue = value;
          if (field.param === 'membershipLevel') {
            switch(value) {
              case 'np':
                displayValue = 'Non-Profit';
                break;
              case 'bronze':
                displayValue = 'Bronze';
                break;
              case 'silver':
                displayValue = 'Silver';
                break;
              case 'gold':
                displayValue = 'Gold';
                break;
            }
          }
          
          // Format the timestamp
          if (field.param === 'timestamp') {
            try {
              const date = new Date(value);
              displayValue = date.toLocaleString();
            } catch (e) {
              console.error('Error formatting date:', e);
              displayValue = value;
            }
          }
          
          // Create field container
          const fieldDiv = document.createElement('div');
          fieldDiv.className = 'summary-field';
          
          // Create label
          const label = document.createElement('span');
          label.className = 'summary-label';
          label.textContent = field.label + ':';
          
          // Create value
          const valueSpan = document.createElement('span');
          valueSpan.className = 'summary-value';
          valueSpan.textContent = displayValue;
          
          // Add to field container
          fieldDiv.appendChild(label);
          fieldDiv.appendChild(valueSpan);
          
          // Add to summary fields
          summaryFields.appendChild(fieldDiv);
        }
      });
      
      // Add all fields to the summary content
      summaryContent.appendChild(summaryFields);
      
      // Add a message if no data was found
      if (summaryFields.children.length === 0) {
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = 'No submission data was found.';
        noDataMessage.className = 'no-data-message';
        summaryContent.appendChild(noDataMessage);
      }
    } else {
      console.error('Summary content element not found');
    }
  });
  