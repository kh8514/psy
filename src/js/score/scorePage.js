const scorePage = `
<section>
    <div class="score-container">
        <div class="score-title-box">
            <div class="score-title">
                <h2>방금 제시된 이미지는 얼마나 부정적이었다고 생각하십니까?</h2>
            </div>
        </div>
        <div class="score-text-box">
            <div class="score-text">
                <p>전혀</p>
                <p>부정적이지</p>
                <p>않았다</p>
            </div>
            <div></div>
            <div class="score-text">
                <p>아무렇지</p>
                <p>않다</p>
            </div>
            <div></div>
            <div class="score-text">
                <p>매우</p>
                <p>부정적이다</p>
            </div>
        </div>
        <div class="score-line-box">
            <div class="score-line-top">
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
            </div>
            <div class="score-line-bottom">
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
            </div>
        </div>
        <div class="score-radio-box">
            <div class="area">
                <div></div>
                <div><input type="radio" name="score" value="1"></div>
                <div><input type="radio" name="score" value="2"></div>
                <div><input type="radio" name="score" value="3"></div>
                <div><input type="radio" name="score" value="4"></div>
                <div><input type="radio" name="score" value="5"></div>
                <div><input type="radio" name="score" value="6"></div>
                <div><input type="radio" name="score" value="7"></div>
                <div><input type="radio" name="score" value="8"></div>
                <div><input type="radio" name="score" value="9"></div>
            </div>
        </div>
    </div>
</section>`;

const assessPage = `
<section>
    <div class="assess-container">
        <div class="assess-title-box">
            <div class="assess-title">
                <h2>전반적으로 전략을 얼마나 잘 사용했다고 생각하십니까?</h2>
            </div>
        </div>
        <div class="assess-text-box">
            <div class="assess-text-group">
                <div class="assess-text"></div>
                <div class="assess-text">
                    <p>아주 잘 했다</p>
                </div>
                <div class="assess-text"></div>
                <div class="assess-text"></div>
                <div class="assess-text"></div>
                <div class="assess-text">
                </div>
                <div class="assess-text"> <p>아주 못 했다</p></div>
            </div>
        </div>
        <div class="assess-line-box">
            <div class="assess-line-top">
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
                <div class="top-box"></div>
            </div>
            <div class="assess-line-bottom">
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
                <div class="bottom-box"></div>
            </div>
        </div>
        <div class="assess-radio-box">
            <div class="area">
                <div></div>
                <div>
                    <input type="radio" name="score" value="6">
                </div>
                <div>
                    <input type="radio" name="score" value="5">
                </div>
                <div>
                    <input type="radio" name="score" value="4">
                </div>
                <div>
                    <input type="radio" name="score" value="3">
                </div>
                <div>
                    <input type="radio" name="score" value="2">
                </div>
                <div>
                    <input type="radio" name="score" value="1">
                </div>
            </div>
    </div>
</section>
`;
export { scorePage, assessPage };
