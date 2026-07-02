// مصفوفة البيانات للفائزين - الترتيب هنا لا يهم، السكريبت سيقوم بترتيبهم
const winnersData = [
    { rank: "1", name: "الحفيد المتميز الأول", note: "المركز الأول في الحفظ والالتزام", image: "winner1.jpg" },
    { rank: "2", name: "الحفيد المتميز الثاني", note: "المركز الثاني بجدارة متميزة", image: "winner2.jpg" },
    { rank: "3", name: "الحفيد المتميز الثالث", note: "المركز الثالث بتقدير ممتاز", image: "winner3.jpg" }
];

function initWinnersBoard() {
    const gridContainer = document.getElementById('winnersGrid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    // دالة مساعدة لتحديد الترتيب (flex-order) بناءً على الرتبة
    const getFlexOrder = (rank) => {
        if (rank === "1") return 1;
        if (rank === "2") return 0; // سيظهر على اليسار
        if (rank === "3") return 2; // سيظهر على اليمين
        return parseInt(rank);
    };

    winnersData.forEach(winner => {
        const cardElement = document.createElement('div');

        // تحديد كلاس الترتيب بناءً على الدالة المساعدة
        cardElement.className = `winner-card flex-order-${getFlexOrder(winner.rank)}`;

        cardElement.innerHTML = `
            <div class="rank-badge">${winner.rank}</div>
            <div class="winner-avatar-container">
                <img src="${winner.image}" alt="${winner.name}" class="winner-avatar">
            </div>
            <div class="winner-name">${winner.name}</div>
            <div class="winner-achievement">${winner.note}</div>
        `;

        gridContainer.appendChild(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', initWinnersBoard);

/* كلاسات التحكم في الترتيب (Flex Order) */
.flex-order-0 { order: 0; } /* لليسار */
.flex-order-1 { order: 1; } /* للمنتصف */
.flex-order-2 { order: 2; } /* لليمين */