(function() {
    'use strict';

    var siteHelperConfig = {
        officialUrl: 'https://m-index-i-game.com.cn',
        keyword: '爱游戏',
        creatorSeed: 0
    };

    var pageTips = [
        { type: 'info', message: '本站为您提供最新的' + siteHelperConfig.keyword + '资讯与指南。' },
        { type: 'tip', message: '请通过官方渠道访问：' + siteHelperConfig.officialUrl },
        { type: 'warning', message: '注意信息安全，谨防非官方链接。' }
    ];

    var keywordBadges = [
        { label: siteHelperConfig.keyword, color: '#e74c3c' },
        { label: '游戏攻略', color: '#2ecc71' },
        { label: '新手入门', color: '#3498db' }
    ];

    function createTipCard(data) {
        var card = document.createElement('div');
        card.className = 'site-tip-card site-tip-' + data.type;
        card.style.cssText = 'padding:12px 16px;margin:8px 0;border-radius:6px;font-size:14px;line-height:1.5;color:#fff;';
        switch(data.type) {
            case 'info':
                card.style.backgroundColor = '#17a2b8';
                break;
            case 'tip':
                card.style.backgroundColor = '#28a745';
                break;
            case 'warning':
                card.style.backgroundColor = '#ffc107';
                card.style.color = '#333';
                break;
        }
        card.textContent = data.message;
        return card;
    }

    function createBadge(badge) {
        var span = document.createElement('span');
        span.className = 'keyword-badge';
        span.style.cssText = 'display:inline-block;padding:4px 10px;margin:4px;border-radius:12px;font-size:12px;font-weight:bold;color:#fff;background-color:' + badge.color + ';';
        span.textContent = badge.label;
        return span;
    }

    function renderAccessNotice() {
        var notice = document.createElement('div');
        notice.className = 'access-notice';
        notice.style.cssText = 'padding:16px;margin:16px 0;border:1px solid #ddd;border-radius:8px;background:#f9f9f9;font-size:13px;color:#555;';
        notice.innerHTML = '<strong>访问说明：</strong>本页面由 <a href="' + siteHelperConfig.officialUrl + '" target="_blank" rel="noopener noreferrer" style="color:#007bff;text-decoration:none;">' + siteHelperConfig.officialUrl + '</a> 提供支持。如需帮助，请参考相关教程。';
        return notice;
    }

    function initSiteHelper() {
        var container = document.getElementById('site-helper-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'site-helper-container';
            container.style.cssText = 'max-width:600px;margin:20px auto;padding:0 16px;font-family:Arial,sans-serif;';
            var first = document.body.firstChild;
            if (first) {
                document.body.insertBefore(container, first);
            } else {
                document.body.appendChild(container);
            }
        }

        var heading = document.createElement('h3');
        heading.textContent = '站点助手';
        heading.style.cssText = 'margin:0 0 12px;font-size:18px;color:#333;';
        container.appendChild(heading);

        pageTips.forEach(function(tip) {
            container.appendChild(createTipCard(tip));
        });

        var badgeGroup = document.createElement('div');
        badgeGroup.style.cssText = 'margin:12px 0;';
        keywordBadges.forEach(function(badge) {
            badgeGroup.appendChild(createBadge(badge));
        });
        container.appendChild(badgeGroup);

        container.appendChild(renderAccessNotice());

        var footer = document.createElement('p');
        footer.style.cssText = 'margin-top:16px;font-size:11px;color:#999;text-align:center;';
        footer.textContent = '助手版本 2024.11 | 内容仅供参考';
        container.appendChild(footer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteHelper);
    } else {
        initSiteHelper();
    }
})();