let expandElementCreated = false;
let expandElement = null;
let writerContent = document.querySelector(".writer-content");

function shareExpand() {
    const wrapper = document.querySelector(".wrapper");

    if (window.innerWidth < 1200) {
        writerContent.parentNode.removeChild(writerContent);
    } else {
        if (writerContent.parentNode !== wrapper.querySelector(".main-content")) {
            wrapper.querySelector(".main-content").appendChild(writerContent);
        }
    }

    if (expandElement === null) {
        if (!expandElementCreated) {
            expandElement = document.createElement('div');
            expandElement.classList.add("share-expand");

            const socialImage = [
                { url: './images/icon-facebook.svg', alt: 'Facebook icon' },
                { url: './images/icon-twitter.svg', alt: 'twitter icon' },
                { url: './images/icon-pinterest.svg', alt: 'Pinterest icon' }
            ];

            const bgClip = document.createElement('div');
            bgClip.classList.add("background-clip");
            expandElement.appendChild(bgClip);

            const shareText = document.createElement('p');
            shareText.textContent = "share";
            expandElement.appendChild(shareText);
            const socialLink = document.createElement('div');
            socialLink.classList.add('social-link');
            expandElement.appendChild(socialLink);

            socialImage.forEach(link => {
                const imgElement = document.createElement('img');
                imgElement.src = link.url;
                imgElement.alt = link.alt;

                const linkElement = document.createElement('a');
                linkElement.href = "#";
                linkElement.appendChild(imgElement);

                socialLink.appendChild(linkElement);
            })

            const shareButton = document.createElement("button");
            shareButton.classList.add("share-btn-close")
            shareButton.addEventListener("click", function () {
                expandElement.remove();
                expandElement = null;

                if (window.innerWidth < 1200) {
                    wrapper.querySelector(".main-content").appendChild(writerContent);
                }

                wrapper.querySelector(".main-content").appendChild(writerContent);
            });
            const shareIcon = document.createElement('img');
            shareIcon.classList.add('share-icon');
            shareIcon.src = "./images/icon-share-white.png";
            shareIcon.alt = "Share icon";

            shareButton.appendChild(shareIcon);

            expandElement.appendChild(shareButton);

            wrapper.insertAdjacentElement('afterend', expandElement);
        }
    }

    // window.addEventListener('resize', function () {
    //     shareExpand();
    // });

    // window.onload = shareExpand;
}

